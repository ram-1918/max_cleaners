from typing import Iterable
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
import django
import uuid
from datetime import timedelta

class UserManager(BaseUserManager):
    def create(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Email id is required!')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

class User(AbstractBaseUser):
    starch_choices = [('low', 'Low'), ('medium', 'Medium'), ('high', 'High')]
    last_login = False
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    fullname = models.CharField(max_length=30, blank=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=16, blank=True)
    phone = models.CharField(max_length=16, blank=True)
    starch = models.CharField(choices=starch_choices, max_length=7, default='low')
    location = models.CharField(max_length=20, blank=True)
    is_admin = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now=True)
    last_modified = models.DateTimeField(auto_now_add=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['fullname', 'password']

    def __str__(self):
        return f'{self.email}'
    
    class Meta:
        verbose_name_plural = 'User'

class UserAddresses(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=255, blank=True)
    primary = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.user.email} || {self.address} || {self.primary}'
    
    class Meta():
        verbose_name_plural = 'UserAddresses'

class Order(models.Model):
    status_options = [
        ('placed', 'Placed'), 
        ('processing', 'Processing'), 
        ('completed', 'Completed'), 
        ('delivered', 'Delivered')
        ]
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, related_name='user', on_delete=models.CASCADE)
    status = models.CharField(choices=status_options, max_length=10, default='placed')
    created_at = models.DateTimeField(auto_created=True)
    estimated_delivery = models.DateTimeField(default=django.utils.timezone.now() + timedelta(hours=5))
    address = models.ForeignKey(UserAddresses, on_delete=models.CASCADE)
    cart = models.JSONField()
    schedule = models.JSONField()

    def __str__(self):
        return f'{self.id} - {self.user.email}'