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
    link_video = models.URLField(max_length=255, null=True, blank=True)

    def __str__(self):
        return f"{self.nome} - {self.descricao}"

class Peca(models.Model):
    nome = models.CharField(max_length=255)
    descricao = models.CharField(max_length=255)
    linha = models.ForeignKey(Linha, on_delete=models.CASCADE)
    imagem = models.ImageField(upload_to='pecas/', null=True, blank=True)

    def __str__(self):
        return f"{self.nome} - {self.descricao}"

class RelacaoProcessoPeca(models.Model):
    peca = models.ForeignKey(Peca, on_delete=models.CASCADE)
    processo = models.ForeignKey(Processo, on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.processo.nome} - {self.peca.nome}"