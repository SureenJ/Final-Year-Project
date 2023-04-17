from rest_framework import serializers
from .models import Appointment
from Doctor.serializers import DoctorSerializer
from User.serializers import UserSerializer
class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'
    
class FullAppointmentSerializer(serializers.ModelSerializer):
    doctor = DoctorSerializer()
    patient = UserSerializer()
    class Meta:
        model = Appointment
        fields = '__all__'
    