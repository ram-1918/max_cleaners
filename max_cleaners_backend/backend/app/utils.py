from .models import User
from .authentication import get_token

def get_user_object(request):
    email = request.data.get('email', None)
    user = User.objects.filter(email = email).first()
    return user

def verify_user_login(request):
    password = request.data.get('password', None)
    user = get_user_object(request)
    if user.check_password(password):
        return True
    return False

def set_http_only_cookie(response, type, token):
    return response.set_cookie(
        key=type, 
        value=token, 
        path='/',
        httponly=True, 
        samesite='None',
        secure=True
        )


def set_jwt_token(request, response):
    user = get_user_object(request)
    if user:
        data = {
            "id": str(user.id), 
            "name": user.fullname.title(),
            "is_admin": user.is_admin, 
            "email": user.email
            }
        response.data = data
        access = get_token(user, 'access')
        refresh = get_token(user, 'refresh')
        print('setting cookie')
        set_http_only_cookie(response, 'refresh', refresh)
        set_http_only_cookie(response, 'access', access)
        print('cookie set')
        return response
    else:
        return None