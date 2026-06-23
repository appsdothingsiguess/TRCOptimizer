from pathlib import Path

from fastapi import FastAPI

from break_counter import count_breaks
from csv_parser import parse_csv
from excel_writer import write_intake_row
from models import ProcessRequest, TagNotFoundError

EXCEL_PATH = Path(__file__).parent.parent / "data" / "macbook_intake.xlsx"

app = FastAPI()


@app.post("/process")
async def process_intake(request: ProcessRequest):
    try:
        device = parse_csv(request.csv_data, request.asset_tag)
        break_count = count_breaks(request.history_rows)
        write_intake_row(
            request.iiq_ticket,
            request.asset_tag,
            device.serial,
            device.school_name,
            request.tech_initials,
            break_count,
            EXCEL_PATH,
        )
        return {
            "success": True,
            "serial": device.serial,
            "product_name": device.product_name,
            "school_name": device.school_name,
            "break_count": break_count,
        }
    except Exception as e:
        return {"success": False, "error": str(e)}
