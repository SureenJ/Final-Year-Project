from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from .views import isAdmin, isDoctor
urlpatterns = [
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('doctor/', include('Doctor.urls')),
    path('appointment/', include('Appointment.urls')),
    path('tests/', include('Report.urls')),
    path('user/', include('User.urls')),
    path('isAdmin/', isAdmin),
    path('isDoctor/', isDoctor)
]