from fastapi import APIRouter

router = APIRouter(prefix="/simulation", tags=["Simulation"])

@router.get("/")
def simulation():
    return {
        "buttons": [
            {"label": "Menu"},
            {"label": "New Chat"},
            {"label": "Send Image"},
            {"label": "Voice Call"}
        ]
    }
