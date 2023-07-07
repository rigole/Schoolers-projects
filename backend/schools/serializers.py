from rest_framework import serializers
from dataclasses import fields
from .models import School, Category, StudyField, Program, EntranceExamination
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken

#from rest_framework_simplejwt.serializers import TokenObtainPairSerializer




class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_staff']
        
        
         
class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id','username', 'email', 'is_staff', 'token']
        
    
    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
    
    
 
 
"""
    
class LoginSerializer(TokenObtainPairSerializer):
    
    def validate(self, attrs):
        data = super().validate(attrs)
        
        refresh = self.get_token()
        data['user'] = UserSerializer(self.user).data
        data['access'] = str(refresh.token)       
        
        return data
        
"""         

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("category_id", "category_name")


class SchoolSerialiser(serializers.ModelSerializer):
    category_name = serializers.SlugRelatedField(slug_field="category_name", read_only=True)
    class Meta:
        model = School
        fields = ('user', 'name', 'image', 'description', 'rating','school_id','category_name','coverImage', 'location')
        
        
class StudyFieldSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudyField
        fields = '__all__'
        
        
class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = '__all__'
        
        
class EntranceExaminationSerializer(serializers.ModelSerializer):
    class Meta:
        model = EntranceExamination
        fields = '__all__'
        
        
