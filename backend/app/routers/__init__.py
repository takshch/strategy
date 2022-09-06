from fastapi import APIRouter
from .indicators import router as indicators_router

main_router = APIRouter()

main_router.include_router(indicators_router, prefix="/indicators")