from rest_framework import serializers
from .models import BoxMessage


class BoxMessageSerializer(serializers.ModelSerializer):
    emitter_name = serializers.CharField(
        source='emitter.username', read_only=True)

    class Meta:
        model = BoxMessage
        fields = ['id', 'emitter', 'emitter_name', 'text', 'last_message']
