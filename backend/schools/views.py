from http.client import HTTPResponse
import random
from django.shortcuts import redirect, render
from schools.models import School, StudyField, Program
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse
from schools.serializers import SchoolSerialiser, StudyFieldSerializer, ProgramSerializer, UserSerializer,UserSerializerWithToken

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.models import User

from django.contrib.auth.hashers import make_password
from rest_framework import status

from rest_framework.permissions import IsAdminUser, IsAuthenticated

from django.contrib.auth.forms import AuthenticationForm

from django.contrib.auth import authenticate, login, get_user_model

from django.views.decorators.csrf import csrf_exempt

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

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
        for key, value in serializer.items():
            data[key] = value
        return data
    

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
    
    
#View to register user
@api_view(['POST'])
def registerUser(request):
    data = request.data
    user = User.objects.create(
        email = data['email'],
        password =data['password'],
        username = data['username']
    )
    user.save()
    return Response(data, status=status.HTTP_200_OK)
    #except:
#        message = {'detail': "User with this status already exists"}
#        return Response(message, status=status.HTTP_400_BAD_REQUEST)



def generate_session_token(length=10):
    return ''.join(random.SystemRandom().choice([chr(i) for i in range(97, 123)] + 
                                                [str(i) for i in range(10)]) for _ in range(length))
    
    
    
@csrf_exempt
@api_view(['POST'])
def signInUser(request):
    #username = request.POST.get('email')
    #password = request.POST.get('password')
    #usermodel = User()
    
    if request.method == 'POST':
         username = request.POST.get('email')
         password = request.POST.get('password')
         if username is not None:
            user = authenticate(username, password)
            print(user)
            if user is not None:
                login(request, user)
                return HttpResponse("Success")
            else:
                form = AuthenticationForm()
                return HttpResponse("Failed")    
         else:
            return HttpResponse("Invalid form")
    
    """
    
          email = request.POST.get("email", False)
    password = request.POST.get("password", False)
    #test_log = authenticate(email, password)
    user = authenticate(request)
    login(request, email, password)
    if user is not None:
        return Response(user, status=status.HTTP_200_OK)
    else:
        print(user)
        return Response(status=status.HTTP_403_FORBIDDEN)

#
    
    
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