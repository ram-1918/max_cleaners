from django.urls import path
from .auth_views import UserRegistrationAPI, user_login_api, UserListAPI, UserUpdateAPI, SingleUserDetails, user_logout_api
from .order_views import ListCreateOrderAPI, UpdateOrderAPI

urlpatterns = [
     # User APIs     
     path('user/register', UserRegistrationAPI.as_view()),
     path('user/list', UserListAPI.as_view()),
     path('user/<uuid:pk>', SingleUserDetails.as_view()),
     path('user/update/<uuid:pk>', UserUpdateAPI.as_view()),
     path('user/login', user_login_api),
     path('user/logout', user_logout_api),
     
     # Order APIs
     path('order/list-create', ListCreateOrderAPI.as_view()),
     path('order/update', UpdateOrderAPI.as_view()),
]
