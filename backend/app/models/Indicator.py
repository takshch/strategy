from sqlalchemy import Column, Integer
from . import Base

class Indicator(Base):
    __tablename__ = "indicators"

    id = Column(Integer, primary_key=True, index=True)
    type = Column(Integer)
    fast = Column(Integer)
    slow = Column(Integer)
    smoothline = Column(Integer)
    period = Column(Integer)
    multiplier = Column(Integer)
