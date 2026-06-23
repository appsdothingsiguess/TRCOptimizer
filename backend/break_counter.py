"""Break counter for MacBook intake.

Business rule (confirmed 2026-06-23):
  - A "break" is defined as the device arriving at Technology Repair Center
    for repair (status == "InRepair") while assigned to the current staff member.
  - Damage is NOT counted from the strike/break_name field because it is not
    consistently logged in i3.
  - Breaks are logically tied to the PERSON per DEVICE TYPE across all devices
    they have ever held, not just to a single device instance.

Current implementation limitation (POC):
  - We only have history for the ONE device being intaken.
  - We count TRC InRepair visits for that specific device since the most recent
    Staff EP assignment to the current holder.
  - This under-counts when the same person previously broke a different device of
    the same type (those visits are in other devices' histories, not here).
  - Full per-person-per-type counting requires additional API calls not yet
    implemented. This is a known gap — count will be a floor, never an over-count.
"""

import logging
import re
from datetime import datetime

TRC_SITE = "Technology Repair Center"
TRC_REPAIR_STATUS = "InRepair"
DATE_FMT = "%m-%d-%Y %H:%M"


def _norm(s: str) -> str:
    """Collapse interior spaces in parentheses.

    The i3 API returns inPlaceType values like 'Staff ( EP12345 )' with spaces
    inside the parens. Normalise to 'Staff (EP12345)' so the EP check works
    regardless of server-side spacing.
    """
    s = re.sub(r"\(\s+", "(", s)
    s = re.sub(r"\s+\)", ")", s)
    return s


def count_breaks(history_rows: list[dict]) -> int:
    """Count TRC repair visits since the device was last assigned to a Staff EP holder.

    Args:
        history_rows: List of history dicts, newest first. Each dict must have:
            - date        (str): "MM-DD-YYYY HH:MM"
            - assigned_to (str): inPlaceType from i3 API, e.g. "Staff ( EP12345 )"
            - site_name   (str): siteName from i3 API, e.g. "Technology Repair Center"
            - status      (str): status from i3 API, e.g. "InRepair"

    Returns:
        Number of TRC InRepair visits on or after the cutoff date. Returns 0 if
        no Staff EP assignment row is found (logs a warning).
    """
    cutoff_date = None
    for row in history_rows:
        assigned = _norm(row.get("assigned_to", ""))
        if "Staff (EP" in assigned:
            cutoff_date = datetime.strptime(row["date"], DATE_FMT)
            break

    if cutoff_date is None:
        logging.warning(
            "No Staff EP assignment row found in history — break count set to 0. "
            "Device may not be currently assigned to a staff member."
        )
        return 0

    count = 0
    for row in history_rows:
        # BOTH conditions must be true. Every school has a room named "TRC Repair"
        # whose rows have status="InRepair" but siteName=<school name>, NOT
        # "Technology Repair Center". Those rows fail the first check and are
        # correctly excluded.
        if row.get("site_name") != TRC_SITE:
            continue
        if row.get("status") != TRC_REPAIR_STATUS:
            continue
        try:
            row_date = datetime.strptime(row["date"], DATE_FMT)
        except (KeyError, ValueError):
            continue
        if row_date >= cutoff_date:
            count += 1

    return count
