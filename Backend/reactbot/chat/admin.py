from django.contrib import admin
from .models import BoxMessage, OptionGroup, Option, Answer

# Register your models here.
admin.site.register(BoxMessage)
admin.site.register(OptionGroup)
admin.site.register(Option)
admin.site.register(Answer)
