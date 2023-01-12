from django.shortcuts import render
from schools.models import School
from rest_framework.response import Response
from schools.serializers import SchoolSerialiser
from rest_framework import status
from rest_framework.decorators import api_view

# Create your views here.

#View to get all universities
@api_view(['GET'])
def getAllSchools(request):
    schools = School.objects.all()
    serializer = SchoolSerialiser(schools, many=True)
    return Response(serializer.data)