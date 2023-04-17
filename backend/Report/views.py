from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import TestSerializer, TestTypeSerializer
from .models import Test, TestType
from Doctor.models import Doctor
from datetime import datetime
from django.contrib.auth.models import User


# Create your views here.
from .models import Test, TestType

def create_test(request):
    # Function to create a new test.
    try:
        data = request.data
        data.update({'patient': request.user.id})
        test = TestSerializer(data=data)
        if test.is_valid():
            test.instance.full_clean()
            test.save()
            return Response({'response': 'Test created successfully.'}, status=201)
        else:
            return Response({'response': 'Invalid data.'}, status=400)
    except Exception as e:
        print(e)
        return Response({'message': str(e)}, status=500)


def get_user_tests(request):
    # Function to get all the tests of a user.
    try:
        tests = Test.objects.filter(patient=request.user)
        tests = TestSerializer(tests, many=True)
        return Response({'response': tests.data}, status=200)
    except Test.DoesNotExist:
        return Response({'response': 'Test not found.'}, status=404)
    except Exception as e:
        print(e)
        return Response({'response': 'Server Error.'}, status=500)

@api_view(['POST', 'GET'])
@permission_classes([IsAuthenticated,])
def root_view(request):
    if request.method == 'GET':
        return get_user_tests(request)
    if request.method == 'POST':
        return create_test(request)

@api_view(['GET'])
def get_test_types(request):
    # Function to get all the test types.
    try:
        test_types = TestType.objects.all()
        test_types = TestTypeSerializer(test_types, many=True)
        return Response({'response': test_types.data}, status=200)
    except TestType.DoesNotExist:
        return Response({'response': 'Test type not found.'}, status=404)
    except:
        return Response({'response': 'Server Error.'}, status=500)