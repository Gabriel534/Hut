from django.db import models

# Create your models here.

class Linha(models.Model):
    nome = models.CharField(max_length=255)
    descricao = models.CharField(max_length=255)
    Departamento = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.nome} - {self.descricao}"

class Processo(models.Model):
    nome = models.CharField(max_length=255)
    descricao = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.nome} - {self.descricao}"

class Peca(models.Model):
    nome = models.CharField(max_length=255)
    descricao = models.CharField(max_length=255)
    processo = models.ForeignKey(Processo, on_delete=models.CASCADE)
    linha = models.ForeignKey(Linha, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nome} - {self.descricao}"

