from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from .models import Appointment
from .serializers import AppointmentSerializer, FullAppointmentSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from Doctor.models import Doctor
from datetime import datetime
from django.contrib.auth.models import User
from django.core.mail import send_mail, EmailMessage
from threading import Thread
import json

# Create your views here.

def create_appointment(request):
    try:
        data = request.data
        data.update({'patient': request.user.id})
        data.update({'doctor': data['doctor']})

        appointment = AppointmentSerializer(data=data)
        if appointment.is_valid():
            appointment_date_str = data['appointment_date']
            appointment_date = datetime.strptime(appointment_date_str, '%Y-%m-%d').date()
            appointment = Appointment(patient=request.user, doctor=Doctor.objects.get(id=data['doctor']), appointment_date=appointment_date, symptoms=data['symptoms'])
            appointment.clean()
            appointment.save()
            def mailer():
                print('inside mailer')
                msg = 'Greetings, Your appointment with Dr. ' + appointment.doctor.user.first_name + ' ' + appointment.doctor.user.last_name + ' has been booked.'
                send_mail('Appointment confirmation', msg, 'sureenalert@outlook.com', [request.user.email], fail_silently=False)
                print('mail sent!')
            t = Thread(target=mailer)
            print('sending mail!')
            t.start()
            return Response({'response': AppointmentSerializer(appointment).data}, status=201)
        print(appointment.errors)
        return Response({'response': 'Invalid data.'}, status=400)
    except Exception as e:
        print(e)
        return Response({'message': str(e)}, status=500)


@api_view(['POST'])
@permission_classes([IsAuthenticated,])
def root_view(request):
    if request.method == 'POST':
        return create_appointment(request)

@api_view(['GET'])
@permission_classes([IsAuthenticated,])
def get_appointments_by_patient(request):
    try:
        appointment = Appointment.objects.filter(patient = request.user)
        print('appointment', appointment)
        appointment = FullAppointmentSerializer(appointment, many=True)
        return Response({'response': appointment.data}, status=200)
    except Appointment.DoesNotExist:
        return Response({'response': 'Appointment not found.'}, status=404)
    except:
        return Response({'response': 'Server Error.'}, status=500)

@api_view(['GET'])
@permission_classes([IsAuthenticated,])
def get_appointments_by_doctor(request):
    try:
        appointment = Appointment.objects.filter(doctor = Doctor.objects.get(user=request.user))
        if not appointment:
            return Response({'response': 'Unauthorized.'}, status=401)
        appointment = AppointmentSerializer(appointment, many=True)
        return Response({'response': appointment.data}, status=200)
    except Appointment.DoesNotExist:
        return Response({'response': 'Appointment not found.'}, status=404)
    except Doctor.DoesNotExist:
        return Response({'response': 'Unauthorized.'}, status=401)
    except Exception as e:
        return Response({'response': str(e)}, status=500)

@api_view(['GET'])
def get_appointments_by_id(request, id):
    try:
        appointment = Appointment.objects.get(id=id)
        appointment = AppointmentSerializer(appointment, many=False)
        return Response({'response': appointment.data}, status=200)
    except Appointment.DoesNotExist:
        return Response({'response': 'Appointment not found.'}, status=404)
    except Exception as e:
        return Response({'response': str(e)}, status=500)


@api_view(['GET'])
def get_appointments_by_date(request, date):
    try:
        if date is None:
            return Response({'response': 'Please provide a date parameter.'}, status=400)
        
        appointments = Appointment.objects.filter(appointment_date=date)
        
        serializer = FullAppointmentSerializer(appointments, many=True)
        
        return Response({'response': serializer.data}, status=200)
    
    except Appointment.DoesNotExist:
        return Response({'response': 'No appointments found for the selected date.'}, status=404)
    
    except Exception as e:
        return Response({'response': str(e)}, status=500)