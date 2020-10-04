from django.shortcuts import render
from profiles.models import Chat
from rest_framework import viewsets, permissions, generics
from profiles.serializer import ChatSerializer, NewUserSerializer
from django.contrib.auth.models import User


class ChatViewSet(viewsets.ModelViewSet):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer
    permission_classes = [permissions.IsAuthenticated]


class NewUserCreateAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = NewUserSerializer
    permission_classes = [permissions.AllowAny]
