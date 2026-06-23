from pathlib import Path

from fastapi import FastAPI

from break_counter import count_breaks
from excel_writer import write_intake_row
from models import ProcessRequest

EXCEL_PATH = Path(__file__).parent.parent / "data" / "macbook_intake.xlsx"

app = FastAPI()


@app.post("/process")
async def process_intake(request: ProcessRequest):
    try:
        break_count = count_breaks(request.history_rows)
        write_intake_row(
            request.iiq_ticket,
            request.asset_tag,
            request.serial,
            request.school_name,
            request.tech_initials,
            break_count,
            EXCEL_PATH,
        )
        return {
            "success": True,
            "serial": request.serial,
            "product_name": request.product_name,
            "school_name": request.school_name,
            "break_count": break_count,
        }
    except Exception as e:
        return {"success": False, "error": str(e)}
