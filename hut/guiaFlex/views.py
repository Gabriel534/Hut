from django.shortcuts import render
from guiaFlex.models import Peca, Processo, Linha
from django.http import JsonResponse

# Create your views here.
def linha(request, linha):
    # linhas = Linha.objects.all()
    # processos = Processo.objects.all()
    # pecas = Peca.objects.all()
    
    # Linha.objects.create(nome="Linha 1", descricao="Descrição da Linha 1")
    # Processo.objects.create(nome="Processo 1", descricao="Descrição do Processo 1")
    # Peca.objects.create(nome="Peça 1", descricao="Descrição da Peça 1", processo=Processo.objects.first(), linha=Linha.objects.first())

    # member = Member(firstname='Emil', lastname='Refsnes')
    # member.save()
    # Member.objects.all().values()
    if not Linha.objects.filter(nome=linha).exists():
        return render(request, "guiaFlex/html/404.html", {"message": "Linha não encontrada."})
    
    context = {
        'Pecas': Peca.objects.filter(linha=Linha.objects.get(nome=linha)).values(),
        "Linha": Linha.objects.filter(nome=linha).values_list("nome", flat=True).first() or "Linha Desconhecida"
    }
    print(linha)
    return render(request, "guiaFlex/html/main.html", context)

def login(request):
    context = {
        "Departamentos": Linha.objects.values("Departamento").distinct(),
        "Linhas": Linha.objects.all().values("nome").distinct(),
    }
    return render(request, "guiaFlex/html/login.html", context)

def get_linhas_por_setor(request):
    setor = request.GET.get("setor")
    
    if setor:
        linhas = Linha.objects.filter(Departamento=setor).values_list("nome", flat=True).distinct()
    else:
        linhas = Linha.objects.values_list("nome", flat=True).distinct()
    return JsonResponse({"linhas": list(linhas)})