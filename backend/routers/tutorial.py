from fastapi import APIRouter
from models.tutorial_request import TutorialRequest
from services.ai_service import generate_tutorial

router = APIRouter(prefix="/tutorial", tags=["Tutorial"])

@router.post("/")
async def get_tutorial(data: TutorialRequest):
    tutorial = generate_tutorial(data.app_name, data.language)
    return {"tutorial": tutorial}
