from django.contrib import admin
from django.urls import path
from api import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/greeting/', views.greeting),
    path('api/about/', views.about),
]
