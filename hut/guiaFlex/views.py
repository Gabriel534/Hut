from django.shortcuts import render
from guiaFlex.models import Peca, Processo, Linha

# Create your views here.
def linha(request):
    # linhas = Linha.objects.all()
    # processos = Processo.objects.all()
    # pecas = Peca.objects.all()
    
    # Linha.objects.create(nome="Linha 1", descricao="Descrição da Linha 1")
    # Processo.objects.create(nome="Processo 1", descricao="Descrição do Processo 1")
    # Peca.objects.create(nome="Peça 1", descricao="Descrição da Peça 1", processo=Processo.objects.first(), linha=Linha.objects.first())

    # member = Member(firstname='Emil', lastname='Refsnes')
    # member.save()
    # Member.objects.all().values()
    context = {
        'linha': Linha.objects.all()[0].nome,
        'peca': Peca.objects.all()[0].nome,
    }

    return render(request, "guiaFlex/html/main.html", context)

def login(request):
    return render(request, "guiaFlex/html/login.html")