from django.db import models
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from Doctor.models import Doctor
from django.contrib.auth.models import User
import datetime


class Appointment(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    patient = models.ForeignKey(User, on_delete=models.CASCADE)
    appointment_date = models.DateField(default = datetime.date.today)
    symptoms = models.TextField(default='')
    def clean(self):
        super().clean()
        if self.appointment_date is not None:
            day = self.appointment_date.strftime("%A").lower()
            availability_days = eval(self.doctor.availability_days)
            for i in range(0, len(availability_days)):
                availability_days[i] = availability_days[i].lower()
            if day not in availability_days:
                raise ValidationError("Doctor is not available on the selected day.")
            appointment_count = len(Appointment.objects.filter(doctor=self.doctor, appointment_date=self.appointment_date))
            if appointment_count >= self.doctor.max_appointments_per_session:
                raise ValidationError("Doctor has reached maximum appointments for the selected day.")

    
    def __str__(self):
        return f"{self.doctor} - {self.appointment_date}"