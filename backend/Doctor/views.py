from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import DoctorSerializer, SpecializationSerializer
from .models import Doctor, Specialization
# Create your views here.

@api_view(['GET'])
def get_all_specializations(request):
    specializations = Specialization.objects.all()
    specializations = SpecializationSerializer(specializations, many=True)
    return Response({'response': specializations.data})

@api_view(['GET'])
def get_all_doctors(request):
    doctors = Doctor.objects.all()
    doctors = DoctorSerializer(doctors, many=True)
    return Response({'response': doctors.data})

@api_view(['GET'])
def get_doctor(request, id):
    try:
        doctor = Doctor.objects.get(id=id)
        if doctor:
            doctor = DoctorSerializer(doctor, many=False)
            return Response({'response': doctor.data})
    except Doctor.DoesNotExist:
        return Response({'response': 'Doctor not found.'}, status=404)
    except:
        return Response({'response': 'Server Error.'}, status=500)

@api_view(['GET'])
def get_doctors_by_specialization(request, id):
    try:
        doctors = Doctor.objects.filter(specialization=id)
        if doctors:
            doctors = DoctorSerializer(doctors, many=True)
            return Response({'response': doctors.data})
    except Doctor.DoesNotExist:
        return Response({'response': 'Doctor not found.'}, status=404)
    except:
        return Response({'response': 'Server Error.'}, status=500)

