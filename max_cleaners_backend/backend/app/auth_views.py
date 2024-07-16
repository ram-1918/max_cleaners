from rest_framework.response import Response
from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from .models import User, UserAddresses
from .serializers import UserSerializer, UserAddressSerializer
from .utils import verify_user_login, set_jwt_token
from .components import status_code_mapper
from .authentication import JwtAuthentication

class UserRegistrationAPI(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        print('Registration', request.data, *args, **kwargs)
        return super().post(request, *args, **kwargs)

class UserListAPI(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [JwtAuthentication]
    permission_classes = [IsAuthenticated]

class UserUpdateAPI(generics.UpdateAPIView, generics.DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [JwtAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        print('user details semt')
        return super().get(request, *args, **kwargs)

class SingleUserDetails(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [JwtAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        data = {
            "basic_info": {},
            "addresses": {}
        }
        basic_info = User.objects.filter(id=pk).first()
        basic_info_serializer = UserSerializer(basic_info)

        address_info = UserAddresses.objects.filter(user=pk)
        address_info_serializer = UserAddressSerializer(address_info, many=True)

        data["basic_info"] = basic_info_serializer.data
        data["addresses"] = address_info_serializer.data

        return Response(data, 200)

@api_view(['POST'])
def user_login_api(request):
    is_verified = verify_user_login(request)
    if is_verified:
        response = Response("succussfully verified", 200)
        response_with_token = set_jwt_token(request, response)
        if response_with_token:
            return response_with_token
        else:
            return Response('Set token falied', 400)
    else:
        return Response('invalid', 401)

@api_view(['GET'])
def user_logout_api(request):
    response = Response()
    response.status = status_code_mapper[200]
    response.delete_cookie('access')
    response.delete_cookie('refresh')
    if response.get('access') or response.get('refresh'):
        response.data = "error occured"
        response.status= status_code_mapper[400]
    return response