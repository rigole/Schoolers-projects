from unicodedata import name
from django.db import models
from django.contrib.auth.models import User



class Category(models.Model):
    name = models.CharField(max_length=255, null=True,blank=True)
    category_id = models.AutoField(primary_key=True, editable=False)
    
    def __str__(self):
        return self.name
    

class School(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name= models.CharField(max_length=255, null=False, blank=True)
    image = models.ImageField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    school_id = models.AutoField(primary_key=True, editable=False)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    
    def __str__(self):
        return self.name
    
    
class StudyField(models.Model):
    name = models.CharField(max_length=255, null=False, blank=True)
    field_id = models.AutoField(primary_key=True, editable=False)
    
    def __str__(self):
        return self.name
    
    
class Programs(models.Model):
    name = models.CharField(max_length=255, null=False, blank=True)
    duration = models.IntegerField(null=False, blank=True)
    
    
    
    

