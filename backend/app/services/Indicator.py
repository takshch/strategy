from sqlalchemy.orm import Session

from ..models import Indicator as indicatorModel
from ..schemas import Indicator as indicatorSchemas

def get_indicators(db: Session):
    return db.query(indicatorModel).all()

def get_indicator_by_id(db: Session, id: int):
    return db.query(indicatorModel).filter_by(id = id).first()

def delete_indicator_by_id(db: Session, id: int):
    return db.query(indicatorModel).filter_by(id = id).first()

def create_indicator(db: Session, indicator: indicatorSchemas.IndicatorCreate):
    type, fast, slow, smoothline, period, multiplier = indicator
    db_indicator = indicatorModel.Indicator(
        type = type,
        fast = fast,
        slow = slow,
        smoothline = smoothline,
        period = period,
        multiplier = multiplier
    )
    db.add(db_indicator)
    db.commit()
    db.refresh(db_indicator)
    return db_indicator
