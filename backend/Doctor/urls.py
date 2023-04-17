from django.urls import path
from .views import *
urlpatterns = [
    path('', get_all_doctors),
    path('specialization/<int:id>/', get_doctors_by_specialization),
    path('<int:id>/', get_doctor),
    path('specialization/', get_all_specializations),
]