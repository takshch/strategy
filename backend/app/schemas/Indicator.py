from typing import Union
from pydantic import BaseModel, validator

class Indicator(BaseModel):
    type: int
    fast: Union[int, None] = None
    slow: Union[int, None] = None
    smoothline: Union[int, None] = None
    period: Union[int, None] = None
    multiplier: Union[int, None] = None

class IndicatorResponse(Indicator):
    id: int

class IndicatorCreate(Indicator):
    # @validator("type")
    # def validate_type(cls, value, values):
    #     if(not("type" in values)):
    #         raise ValueError("type is required")
    #     return value

    @validator("fast")
    def validate_fast(cls, value, values):
        if values["type"] in [1, 2, 3, 4] and value == None:
            raise ValueError("fast is required")
        return value

    @validator("slow")
    def validate_slow(cls, value, values):
        if values["type"] in [1, 2, 3, 4] and value == None:
            raise ValueError("slow is required")
        return value

    @validator("smoothline")
    def validate_smoothline(cls, value, values):
        if values["type"] in [2, 3] and value == None:
            raise ValueError("smoothline is required")
        return value

    @validator("period")
    def validate_period(cls, value, values):
        if values["type"] in [5, 6] and value == None:
            raise ValueError("period is required")
        return value

    @validator("multiplier")
    def validate_multiplier(cls, value, values):
        if values["type"] in [6] and value == None:
            raise ValueError("multiplier is required")
        return value
