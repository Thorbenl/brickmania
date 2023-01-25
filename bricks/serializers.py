from django.contrib.auth.models import User, Group
from rest_framework import serializers, permissions

from bricks.models import Bricks


class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Bricks.history.model
        fields = '__all__'


class BricksSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        extra_kwargs = {
            'history': {
                'required': False,
            },
        }
        model = Bricks
        depth = 1
        fields = ['id', 'status', 'instance_created_date', 'owner', 'history']

    owner = serializers.ReadOnlyField(source='owner.username')
    history = HistorySerializer(many=True, read_only=True)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class UserSerializer(serializers.HyperlinkedModelSerializer):
    bricks = serializers.HyperlinkedRelatedField(many=True, view_name='brick-detail', read_only=True)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    class Meta:
        model = User
        fields = ['id', 'username', 'bricks']

