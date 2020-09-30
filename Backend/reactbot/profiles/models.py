from django.db import models
from django.contrib.auth.models import User


class Chat(models.Model):
    emitter = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.CharField(max_length=200)

    def __str__(self):
        return f'ID: {self.id} - User: {self.emitter}'
