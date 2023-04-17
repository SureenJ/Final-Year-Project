from rest_framework import serializers
from .models import Doctor
from Doctor.models import Specialization
from User.serializers import UserSerializer
import ast

class SpecializationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialization
        fields = '__all__'

class DoctorSerializer(serializers.ModelSerializer):
    days = serializers.SerializerMethodField()
    user = UserSerializer()
    specialization = SpecializationSerializer()
    class Meta:
        model = Doctor
        fields = ['id', 'days', 'max_appointments_per_session', 'start_time', 'end_time', 'document', 'user', 'specialization', 'image']

    def get_days(self, obj):
        return ast.literal_eval(obj.availability_days)