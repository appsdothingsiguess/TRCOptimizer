from pydantic import BaseModel


class ProcessRequest(BaseModel):
    iiq_ticket: str
    asset_tag: str
    tech_initials: str
    serial: str
    product_name: str
    school_name: str
    history_rows: list[dict]
