from django.contrib import admin
from django.urls import path, include

from guiaFlex import views

urlpatterns = [
    path('', views.login, name='login'),
    path('linha', views.linha, name='linha'),
]
