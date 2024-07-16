from django.contrib import admin
from .models import User, UserAddresses, Order

admin.site.register(User)
admin.site.register(UserAddresses)
admin.site.register(Order)