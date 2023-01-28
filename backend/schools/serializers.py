from rest_framework import serializers
from dataclasses import fields
from .models import School, Category, StudyField, Program, EntranceExamination



        
        

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("category_id", "category_name")


class SchoolSerialiser(serializers.ModelSerializer):
    category_name = serializers.SlugRelatedField(slug_field="category_name", read_only=True)
    class Meta:
        model = School
        fields = ('user', 'name', 'image', 'description', 'rating','school_id','category_name','coverImage')
        
        
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