from rest_framework import generics, permissions
from chat.serializer import BoxMessageSerializer
from .models import BoxMessage


class ChatList(generics.ListCreateAPIView):
    queryset = BoxMessage.objects.all()
    serializer_class = BoxMessageSerializer
    permission_class = [permissions.AllowAny]
