
from .views import root_view, get_test_types
from django.urls import path

urlpatterns = [
    path('', root_view),
    path('types/', get_test_types),
]

