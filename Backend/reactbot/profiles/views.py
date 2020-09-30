from django.shortcuts import render
from profiles.models import Chat
from rest_framework import viewsets, permissions
from profiles.serializer import ChatSerializer


class ChatViewSet(viewsets.ModelViewSet):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer
    permission_classes = [permissions.IsAuthenticated]
