from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password, check_password

# Create your views here.

@api_view(['GET'])  
@permission_classes([IsAuthenticated,])
def get_user_profile(request):
    user = request.user
    return Response({'email': user.email, 'username': user.username})

@api_view(['POST'])
def register_user(request):
    data = request.data
    print(data['password'])
    try:
        user = User(
            username=data['username'],
            first_name=data['first_name'],
            last_name=data['last_name'],
            email=data['email'],
            password=make_password(data['password'])
        )
        user.save()
        return Response({'response': 'User created successfully.'}, status=201)
    except:
        return Response({'response': 'Invalid data.'}, status=400)