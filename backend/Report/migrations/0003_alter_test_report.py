# Generated by Django 4.1.7 on 2023-04-15 05:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Report', '0002_test_patient'),
    ]

    operations = [
        migrations.AlterField(
            model_name='test',
            name='report',
            field=models.FileField(blank=True, null=True, upload_to='reports/'),
        ),
    ]