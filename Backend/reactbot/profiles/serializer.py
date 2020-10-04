from rest_framework import serializers
from .models import Chat
from django.contrib.auth.models import User


class ChatSerializer(serializers.ModelSerializer):
    emitterUsername = serializers.CharField(
        source='emitter.username', read_only=True)

    class Meta:
        model = Chat
        fields = ['id', 'message', 'emitter', 'emitterUsername']


class NewUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'first_name']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user
