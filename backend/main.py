from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import tutorial, simulation

app = FastAPI(title="AppGuru Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# include routes
app.include_router(tutorial.router)
app.include_router(simulation.router)

@app.get("/")
def home():
    return {"message": "Backend Running Successfully"}
