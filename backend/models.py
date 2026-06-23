from pydantic import BaseModel


class ProcessRequest(BaseModel):
    iiq_ticket: str
    asset_tag: str
    tech_initials: str
    csv_data: str
    history_rows: list[dict]


class DeviceInfo(BaseModel):
    serial: str
    device_type: str
    product_name: str
    model: str
    school_name: str
    available_status: str
    room_description: str
    room_type: str


class TagNotFoundError(Exception):
    def __init__(self, asset_tag: str) -> None:
        self.asset_tag = asset_tag
        super().__init__(f"Asset tag '{asset_tag}' not found in CSV")
