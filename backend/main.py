from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class TutorialRequest(BaseModel):
    app_name: str
    language: str

@app.get("/")
def home():
    return {"status": "Ollama backend running with Llama 3.2"}

@app.post("/tutorial/")
async def tutorial(data: TutorialRequest):
    prompt = (
        f"Explain step-by-step how to use {data.app_name} "
        f"in very simple {data.language}. "
        f"Target: Indian users aged 40+ new to smartphones."
    )

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "llama3.2",
            "prompt": prompt,
            "stream": False
        }
    )

    result = response.json()
    return {"tutorial": result["response"]}
