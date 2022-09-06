from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..schemas import Indicator as indicatorSchemas
from ..services import Indicator as indicatorService
from ..dependencies import get_db

router = APIRouter()

@router.post("", response_model=indicatorSchemas.IndicatorResponse)
def create_indicator(indicator: indicatorSchemas.IndicatorCreate, db: Session = Depends(get_db)):
    # return indicator
    return indicatorService.create_indicator(db, indicator)