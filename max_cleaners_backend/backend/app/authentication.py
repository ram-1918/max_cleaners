from django.conf import settings
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.authentication import BaseAuthentication
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime, timedelta
from .components import status_code_mapper, calc_time_left, decode_uuid
from functools import wraps
from .models import User
import jwt
import time

def get_token(user, type):
    expiry_days = datetime.now() + (timedelta(days=1) if type == 'access' else timedelta(days=2))
    payload = {
        'sub': str(user.id),
        'name': user.fullname.title(), 
        'is_admin': user.is_admin
        }
    payload['iat'] = datetime.now()
    payload['iss'] = 'project4'
    payload['exp'] = int(expiry_days.strftime('%s'))
    token = jwt.encode(payload=payload, key=settings.SECRET_KEY, algorithm='HS256')    # generates JWT token
    return token

class JwtAuthentication(BaseAuthentication):
    def authenticate(self, request):
        access = request.COOKIES.get('access')
        refresh = request.COOKIES.get('refresh')
        if not access and not refresh:
            return None
        if access:
            try:
                access_payload = jwt.decode(
                    jwt=access, key=settings.SECRET_KEY, algorithms='HS256')
                timeleft = calc_time_left(access_payload['exp'])
                print("Time left for access token", timeleft)
                id = decode_uuid(access_payload['sub'])
                user = User.objects.filter(id=id).first()
                return user, None
            except jwt.InvalidTokenError:
                raise AuthenticationFailed('Invalid Token')
            except:
                print('Access Expired')
                if refresh:
                    try:
                        refresh_payload = jwt.decode(
                            jwt=refresh, key=settings.SECRET_KEY, algorithms='HS256')
                        timeleft = calc_time_left(refresh_payload['exp'])
                        print("Time left for refresh token", timeleft)
                        id = decode_uuid(refresh_payload['sub'])
                        user = User.objects.filter(id=id).first()
                        newaccess = get_token(user, 'access')
                        return user, newaccess    # If Refresh token present, then generate new access token
                    except jwt.InvalidTokenError:
                        raise AuthenticationFailed('Invalid Token')
        return None

# Saved only for review
def login_required(function=None):
    def decorator(view_func):
        @wraps(view_func)
        def inner(request, *args, **kwargs):
            jwt_auth_obj = JwtAuthentication()
            return jwt_auth_obj.authenticate(request)
        return inner

    if function is not None:
        return decorator(function)
    return decorator