from rest_framework.response import Response
from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated

from .models import Order
from .serializers import OrderSerializer

class ListCreateOrderAPI(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class UpdateOrderAPI(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    
