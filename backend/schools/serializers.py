from rest_framework import serializers

from .models import School, Category, StudyField, Program, EntranceExamination


class SchoolSerialiser(serializers.ModelField):
    class Meta:
        model = School
        fields = '__all__'
        
        

class CategorySerializer(serializers.ModelField):
    class Meta:
        model = Category
        fields = '__all__'
        
        
class StudyFieldSerializer(serializers.ModelField):
    class Meta:
        model = StudyField
        fields = '__all__'
        
        
class ProgramSerializer(serializers.ModelField):
    class Meta:
        model = Program
        fields = '__all__'
        
        
class EntranceExaminationSerializer(serializers.ModelField):
    class Meta:
        model = EntranceExamination
        fields = '__all__'