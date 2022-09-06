from app.init_app import main
from fastapi import FastAPI
from app.routers import main_router

# main()

app = FastAPI()

app.include_router(main_router)