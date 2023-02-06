from django.urls import path

from schools import views

urlpatterns = [
    path('', views.getAllSchools, name="schools"),
    path('<str:pk>/', views.getSchool, name="school")
]
