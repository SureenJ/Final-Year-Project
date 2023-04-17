from django.urls import path
from .views import *

urlpatterns = [
    path('', root_view),
    path('date/<str:date>', get_appointments_by_date),
    path('doctor/', get_appointments_by_doctor),
    path('patient/', get_appointments_by_patient),
    path('<int:id>/', get_appointments_by_id)
]