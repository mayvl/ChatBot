# Generated by Django 3.1.2 on 2020-10-06 21:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0002_auto_20201006_2109'),
    ]

    operations = [
        migrations.AlterField(
            model_name='boxmessage',
            name='last_message',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='chat.boxmessage'),
        ),
    ]
