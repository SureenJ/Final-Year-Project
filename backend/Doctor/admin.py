from django import forms
from django.contrib import admin
from .models import Doctor, Specialization
from django.forms import CheckboxSelectMultiple
from django.db import models


    # def get_available_days_display(self, obj):
    #     return obj.get_available_days_display()
    # get_available_days_display.short_description = 'Available Days'

class DoctorForm(forms.ModelForm):
    availability_days = forms.MultipleChoiceField(choices=[
        ('Monday', 'Monday'),
        ('Tuesday', 'Tuesday'),
        ('Wednesday', 'Wednesday'),
        ('Thursday', 'Thursday'),
        ('Friday', 'Friday'),
        ('Saturday', 'Saturday'),
        ('Sunday', 'Sunday'),
    ], widget=forms.CheckboxSelectMultiple)

    class Meta:
        model = Doctor
        fields = '__all__'


class DoctorAdmin(admin.ModelAdmin):
    form = DoctorForm
    list_display = ('user', 'start_time', 'end_time', 'max_appointments_per_session', 'availability_days')

admin.site.register(Doctor, DoctorAdmin)
admin.site.register(Specialization)
