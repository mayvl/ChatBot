from rest_framework import permissions, generics
from users.serializer import NewUserSerializer
from .models import CustomUser


class NewUserCreateAPIView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = NewUserSerializer
    permission_classes = [permissions.AllowAny, ]
