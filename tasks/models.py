from django.db import models

# Create your models here.


class Tasks(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=500, blank=True)
    done = models.BooleanField(default=False)