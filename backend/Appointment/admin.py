from django.contrib import admin
from django.db import models
from django.forms import DateTimeInput

from .models import Appointment

class AppointmentAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.DateTimeField: {'widget': DateTimeInput(attrs={'type': 'datetime-local'})},
    }

admin.site.register(Appointment, AppointmentAdmin)
