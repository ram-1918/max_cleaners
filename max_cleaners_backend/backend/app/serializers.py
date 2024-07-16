from rest_framework.serializers import ModelSerializer
from .models import User, Order, UserAddresses

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
    
    # Validations on the frontend

class UserAddressSerializerReadOnly(ModelSerializer):
    class Meta:
        model = UserAddresses
        fields = ('address',)

class UserAddressSerializer(ModelSerializer):
    class Meta:
        model = UserAddresses
        fields = '__all__'

class OrderSerializer(ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'