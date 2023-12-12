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