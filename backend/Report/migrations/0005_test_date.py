# Generated by Django 4.1.7 on 2023-04-15 13:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Report', '0004_remove_test_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='test',
            name='date',
            field=models.DateField(auto_now_add=True, null=True),
        ),
    ]
