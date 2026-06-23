import io

import pandas as pd

from models import DeviceInfo, TagNotFoundError


def _cell_str(val) -> str:
    if pd.isna(val):
        return ""
    return str(val).strip()


def parse_csv(csv_text: str, asset_tag: str) -> DeviceInfo:
    df = pd.read_csv(io.StringIO(csv_text))

    df = df.loc[:, ~df.columns.astype(str).str.startswith("Unnamed")]
    if "purchase_order$Storage Capacity" in df.columns:
        df = df.drop(columns=["purchase_order$Storage Capacity"])

    target = asset_tag.strip()

    for _, row in df.iterrows():
        if str(row["Tag"]).strip() == target:
            return DeviceInfo(
                serial=_cell_str(row["Serial"]),
                device_type=_cell_str(row["DeviceType"]),
                product_name=_cell_str(row["ProductName"]),
                model=_cell_str(row["Model"]),
                school_name=_cell_str(row["SchoolName"]),
                available_status=_cell_str(row["AvailableStatus"]),
                room_description=_cell_str(row["RoomDescription"]),
                room_type=_cell_str(row["RoomType"]),
            )

    raise TagNotFoundError(asset_tag)
