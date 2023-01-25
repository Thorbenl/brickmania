from enum import Enum
from typing import Optional, Tuple, Any, TypeVar, Type

from django.db.models import CheckConstraint, Q

_T = TypeVar('_T', bound=Enum)


def enum_to_choices(enum: Type[_T]) -> Tuple[Tuple[Any, str], ...]:
    return tuple((member.value, member.name) for member in enum)


def enum_to_constraint(field: str, enum: Type[Enum], name: Optional[str] = None):
    kwargs = {
        f"{field}__in": [choice.value for choice in enum]
    }
    return CheckConstraint(check=Q(**kwargs), name=name or f"%(app_label)s_%(class)s_valid_{field}")

