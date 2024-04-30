from django.urls import path, include
from . import views
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from rest_framework.schemas import get_schema_view
from django.views.generic import TemplateView


router = routers.DefaultRouter()
router.register(r'tasks', views.TaskViews, 'tasks')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title="Tasks API")),
    path('api_schema/', get_schema_view(title='API Todo APP Schema', description='Guide for REST API with Django'), name='api_schema'),
    path('docs_api/', TemplateView.as_view(template_name='docs.html', extra_context={'schema_url':'api_schema'}), name='swagger-ui'),
]
