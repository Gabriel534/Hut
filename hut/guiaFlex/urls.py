from django.contrib import admin
from django.urls import path, include

from guiaFlex import views

urlpatterns = [
    path('', views.login, name='login'),
    path('<str:linha>', views.linha, name='linha'),
    path("get-linhas/", views.get_linhas_por_setor, name="get_linhas_por_setor")
]
