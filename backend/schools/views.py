from django.shortcuts import render
from schools.models import School, StudyField, Program
from rest_framework.response import Response
from schools.serializers import SchoolSerialiser, StudyFieldSerializer, ProgramSerializer
from rest_framework import status
from rest_framework.decorators import api_view

# Create your views here.

#View to get all universities
@api_view(['GET'])
def getAllSchools(request):
    schools = School.objects.all()
    serializer = SchoolSerialiser(schools, many=True)
    return Response(serializer.data)



#View to get all Fields of Study
@api_view(['GET'])
def getAllFieldOfStudies(request):
    fieldOfStudies = StudyField.objects.all()
    serializer = StudyFieldSerializer(fieldOfStudies, many=True)
    return Response(serializer.data)


#View to get one school
@api_view(['GET'])
def getSchool(request,pk):
    school = School.objects.get(school_id=pk)
    serializer = SchoolSerialiser(school, many=False)
    return Response(serializer.data)



#View to get all Programs
@api_view(['GET'])
def getAllPrograms(request):
    programs = Program.objects.all()
    serializer = ProgramSerializer(programs, many=True)
    return Response(serializer.data)



