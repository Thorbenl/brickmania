from enum import Enum

from django.db import models
from simple_history.models import HistoricalRecords

from utils import enum_to_choices, enum_to_constraint


class IndexedDateFieldsModel(models.Model):
    instance_created_date = models.DateTimeField(auto_now_add=True, db_index=True)
    # TODO: Updating with triggers?
    instance_modified_date = models.DateTimeField(auto_now_add=True, db_index=True)

    class Meta:
        abstract = True


class BrickStatus(str, Enum):
    RED = "RED"
    YELLOW = "YELLOW"
    GREEN = "GREEN"


class Bricks(IndexedDateFieldsModel):
    class Meta:
        constraints = [
            enum_to_constraint('status', BrickStatus),
        ]
    status = models.CharField(max_length=24,
                              blank=False,
                              null=False,
                              choices=enum_to_choices(BrickStatus),
                              db_index=True
                              )
    owner = models.ForeignKey('auth.User', related_name='bricks', on_delete=models.CASCADE)
    history = HistoricalRecords()



