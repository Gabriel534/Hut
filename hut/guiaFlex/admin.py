from django.contrib import admin
from guiaFlex.models import Linha, Processo, Peca

# Register your models here.
admin.site.site_header = "Guia Flex Admin"
admin.site.site_title = "Guia Flex Admin Portal"
admin.site.index_title = "Welcome to the Guia Flex Admin Portal"


class MemberAdmin(admin.ModelAdmin):
  list_display = ("nome", "descricao")

admin.site.register(Linha, MemberAdmin)
admin.site.register(Processo, MemberAdmin)
admin.site.register(Peca, MemberAdmin)
