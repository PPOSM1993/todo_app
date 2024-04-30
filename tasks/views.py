

from rest_framework import viewsets
from .serializers import *
from .models import *
# Create your views here.

class TaskViews(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

