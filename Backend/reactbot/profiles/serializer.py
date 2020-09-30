from rest_framework import serializers
from .models import Chat


class ChatSerializer(serializers.ModelSerializer):
    emitterUsername = serializers.CharField(source='emitter.username', read_only=True)
    class Meta:
        model = Chat
        fields = ['id', 'message', 'emitter', 'emitterUsername']
