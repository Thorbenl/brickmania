from django.urls import path
from rest_framework import renderers
from rest_framework.urlpatterns import format_suffix_patterns

from bricks import views
from bricks.views import UserViewSet, BricksViewSet, HistoryViewSet

bricks_list = BricksViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
bricks_detail = BricksViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

user_list = UserViewSet.as_view({
    'get': 'list'
})
user_detail = UserViewSet.as_view({
    'get': 'retrieve'
})

history_detail = HistoryViewSet.as_view({
    'get': 'list',
})

urlpatterns = [
    path('', views.api_root),
    path('bricks/<int:pk>/', bricks_detail, name='brick-detail'),
    path('bricks/<int:pk>/history', history_detail, name='brick-history-detail'),
    path('bricks/', bricks_list, name='bricks-list'),
    path('users/', user_list, name='user-list'),
    path('users/<int:pk>/', user_detail, name='user-detail'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
