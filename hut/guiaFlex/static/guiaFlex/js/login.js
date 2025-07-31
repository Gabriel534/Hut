document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const department = document.getElementById('department').value;
      const productionLine = document.getElementById('productionLine').value;

      if (!department || !productionLine) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      console.log('Login attempt:', { department, productionLine });
      // Aqui você pode redirecionar ou enviar os dados ao servidor
      window.location.href = `/${productionLine}`;
    });

    document.getElementById("department").addEventListener("change", function() {
    const setorSelecionado = this.value;
    
    fetch(`/get-linhas/?setor=${encodeURIComponent(setorSelecionado)}`)
      .then(response => response.json())
      .then(data => {
        const linhaSelect = document.getElementById("productionLine");
        linhaSelect.innerHTML = '<option value="">Selecione uma Linha</option>';

        data.linhas.forEach(function(linha) {
          const option = document.createElement("option");
          option.value = linha;
          option.textContent = linha;
          linhaSelect.appendChild(option);
        });
      });
});