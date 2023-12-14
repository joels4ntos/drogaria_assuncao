document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const opcao = document.getElementById('opcao').value;
    const telefone = document.getElementById('telefone').value;
    const textarea = document.getElementById('textarea').value;

    const urlWhatsApp = `https://wa.me/556192607681?text=Olá, meu nome é ${nome}.%0A%0AMeu email é ${email} e meu telefone é ${telefone}.%0A%0AGostaria de fazer ${opcao}!%0A%0A${textarea}`;

    window.open(urlWhatsApp, '_blank');
});



function searchPharmaceutical() {
    const apiKey = "SUA_CHAVE_DE_API";
    const cx = "SEU_CX"; // Substitua pelo seu ID do Google Custom Search Engine

    const searchInput = document.getElementById("searchInput").value;
    const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${searchInput}&key=${apiKey}&cx=${cx}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => displayResults(data))
      .catch(error => console.error('Erro na pesquisa:', error));
  }

  function displayResults(data) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (data.items) {
      data.items.forEach(item => {
        const resultItem = document.createElement("div");
        resultItem.innerHTML = `
          <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
          <p>${item.snippet}</p>
        `;
        resultsDiv.appendChild(resultItem);
      });
    } else {
      resultsDiv.innerHTML = "<p>Nenhum resultado encontrado.</p>";
    }
  }


  function openModal() {
    document.getElementById("modal").style.display = "flex";
  }

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }

  function finalizeOrder() {
    // Adicione aqui a lógica para a finalização do pedido via WhatsApp
    // Você pode redirecionar para um link do WhatsApp ou realizar outras ações necessárias.
    alert("Pedido finalizado via WhatsApp!");
  }

