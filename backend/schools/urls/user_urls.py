from django.urls import path
from schools import views


urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    
    path('signup/', views.registerUser, name="signup"),
    
    path('profile/', views.getUserProfile, name="users-profile"),
    
    path('profile/update/', views.updateUserProfile, name="user-profile-update"),
    
    path('', views.getUsers, name="users-profile"),
]
