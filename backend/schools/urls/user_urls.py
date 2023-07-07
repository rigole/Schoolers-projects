from django.urls import path
from schools.views import registerUser, MyTokenObtainPairView, getUserProfile, getUsers, updateUserProfile


urlpatterns = [
    path('signin/', MyTokenObtainPairView.as_view(), name='signin'),
    
    path('signup/', registerUser, name="signup"),
    
    path('profile/', getUserProfile, name="users-profile"),
    
    path('profile/update/', updateUserProfile, name="user-profile-update"),
    
    path('', getUsers, name="users-profile"),
]
