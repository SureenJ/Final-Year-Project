from django.shortcuts import render
# Import user
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from Doctor.models import Doctor
# Create your views here.
@api_view(['GET'])
@permission_classes([IsAuthenticated,])
def isAdmin(request):
    try:
        user = User.objects.get(id=request.user.id)
        if user.is_staff or user.is_superuser:
            return Response({'response': user.is_staff}, status=200)
        else:
            return Response({'response': user.is_staff}, status=401)
    except User.DoesNotExist:
        return Response({'response': 'User not found.'}, status=404)

@api_view(['GET'])
@permission_classes([IsAuthenticated,])
def isDoctor(request):
    try:
        user = User.objects.get(id=request.user.id)
        if Doctor.objects.get(user=user):
            return Response({'response': True}, status=200)
        else:
            return Response({'response': False}, status=401)
    except User.DoesNotExist:
        return Response({'response': 'User not found.'}, status=404)