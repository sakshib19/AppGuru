from pydantic import BaseModel

class TutorialRequest(BaseModel):
    app_name: str
    language: str
