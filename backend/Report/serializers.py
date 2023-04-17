
from rest_framework.serializers import ModelSerializer

from Doctor.models import Doctor
from Doctor.serializers import DoctorSerializer
from django.contrib.auth.models import User
from User.serializers import UserSerializer
from Report.models import Test, TestType
from .models import Test, TestType


class TestTypeSerializer(ModelSerializer):
    class Meta:
        model = TestType
        fields = '__all__'


class TestSerializer(ModelSerializer):
    patient = UserSerializer()
    test_type = TestTypeSerializer()
    class Meta:
        model = Test
        fields = '__all__'

