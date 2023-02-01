from django.urls import path

from schools import views

urlpatterns = [
    path('', views.getAllFieldOfStudies, name="fieldOfStudies")
]
