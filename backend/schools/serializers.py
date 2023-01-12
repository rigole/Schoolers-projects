from rest_framework import serializers
from dataclasses import fields
from .models import School, Category, StudyField, Program, EntranceExamination


class SchoolSerialiser(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = '__all__'
        
        

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
        
        
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