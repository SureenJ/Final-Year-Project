from django.db import models
from django.contrib.auth.models import User
import datetime
# Create your models here.
class TestType(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name

class Test(models.Model):
    test_type = models.ForeignKey(TestType, on_delete=models.CASCADE)
    report = models.FileField(upload_to='reports/', null=True, blank=True)
    patient = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True, null=True)
    def __str__(self):
        return str(self.id) + ' - ' + self.patient.first_name + ' - ' + self.test_type.name