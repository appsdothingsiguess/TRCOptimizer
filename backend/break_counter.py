import logging
from datetime import datetime

DAMAGE_BREAK = "Staff - Device - Damaged"
EP_MARKER = "Staff (EP"
DATE_FMT = "%m-%d-%Y %H:%M"


def count_breaks(history_rows: list[dict]) -> int:
    cutoff_date = None
    for row in history_rows:
        if EP_MARKER in row.get("assigned_to", ""):
            cutoff_date = datetime.strptime(row["date"], DATE_FMT)
            break

    if cutoff_date is None:
        logging.warning(
            "No EP assignment row found in history; break count set to 0"
        )
        return 0

    count = 0
    for row in history_rows:
        if row.get("break_name") != DAMAGE_BREAK:
            continue
        if datetime.strptime(row["date"], DATE_FMT) >= cutoff_date:
            count += 1

    return count
