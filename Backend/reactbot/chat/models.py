from django.db import models
from users.models import CustomUser


class BoxMessage(models.Model):
    emitter = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, null=True)
    text = models.CharField(max_length=100)
    last_message = models.ForeignKey(
        'chat.BoxMessage', on_delete=models.CASCADE,
        null=True, blank=True
    )

    def __str__(self):
        return f'{self.emitter} - {self.text}'


class OptionGroup(models.Model):
    number = models.PositiveIntegerField(unique=True)

    def __str__(self):
        return f'Option {self.number}'


class Option(models.Model):
    text = models.CharField(max_length=100)
    group = models.ForeignKey(
        'chat.OptionGroup', on_delete=models.CASCADE
    )

    def __str__(self):
        return f'{self.group} - {self.text}'


class Answer(models.Model):
    text = models.CharField(max_length=100)
    option = models.ForeignKey('chat.Option', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.text} - {self.option}'
