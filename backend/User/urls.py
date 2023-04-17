from django.urls import path

from .views import *

urlpatterns = [
    path('', get_user_profile, name='get_user_profile'),
    path('register/', register_user, name='register_user'),
]