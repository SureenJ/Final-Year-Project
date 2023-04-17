from django.db import models
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField
from django.core.validators import MaxValueValidator
from django.contrib.auth.models import User
  
# Create your models here.


class Specialization(models.Model):
    name = models.CharField(max_length=100)
    description = RichTextField()
    
    def __str__(self):
        return self.name

class Doctor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='doctors/', blank=True, null=True)
    availability_days = models.CharField(max_length=50)
    max_appointments_per_session = models.PositiveIntegerField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    specialization = models.ForeignKey(Specialization, on_delete=models.CASCADE, related_name='doctors')
    document = models.ImageField(upload_to='documents/', blank=True, null=True)
    
    def clean(self):
        # Validate start and end times
        if self.start_time >= self.end_time:
            raise ValidationError(_("Start time must be before end time"))
    
    def __str__(self):
        return self.user.username

    def get_available_days_display(self):
        return ", ".join(self.available_days)
    
    class Meta:
        verbose_name_plural = "Doctors"
