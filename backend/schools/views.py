import random
from django.shortcuts import redirect, render
from schools.models import School, StudyField, Program
from rest_framework.response import Response
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken
from schools.serializers import SchoolSerialiser, StudyFieldSerializer, ProgramSerializer, UserSerializer,UserSerializerWithToken

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.models import User

from django.contrib.auth.hashers import make_password
from rest_framework.viewsets import ModelViewSet

from rest_framework.permissions import AllowAny

from rest_framework.permissions import IsAdminUser, IsAuthenticated

from rest_framework_simplejwt.views import TokenObtainPairView

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer




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



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserSerializerWithToken(self.user).data
        for keys, values in serializer.items():
            data[keys] = values
        return data   
    



class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
 
#View to register user
@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            username = data['username'],
            email = data['email'],
            password = make_password(data['password'])
        )
        
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    except:
        message = {'detail': "User with this email address already exists"}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
    

    
    

""" 

class signInUser(ModelViewSet, TokenObtainPairView):
    serializer_class = LoginSerializer
    permission_classes = (AllowAny,)
    http_method_names = ['post']
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        
        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])
            
        return Response(serializer.validated_data, status=status.HTTP_200_OK)
"""

    
    

#get user profile view
@api_view(['GET'])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


#view to get all the users and authentication
@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)
    


#view to update user profile
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    
    data = request.data
    
    user.first_name = data['name']
    user.username = data['email']
    if data['password'] != '':
        user.password = make_password(data['password'])
        
        
    user.save()
    
    return Response(serializer.data)