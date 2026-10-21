// Página de rastreamento de pedido
// Mostra o resultado (placeholder estático) com o código digitado.

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('tracking-form');
    const input = document.getElementById('codigo-pedido');
    const erro = document.getElementById('codigo-erro');
    const resultado = document.getElementById('resultado');
    const codigoExibido = document.getElementById('codigo-exibido');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Remove espaços e deixa em maiúsculas: " br123 " vira "BR123"
        const codigo = input.value.trim().toUpperCase();

        if (!codigo) {
            erro.hidden = false;
            input.classList.add('form__input--error');
            input.setAttribute('aria-invalid', 'true');
            input.focus();
            resultado.classList.remove('is-visible');
            return;
        }

        erro.hidden = true;
        input.classList.remove('form__input--error');
        input.removeAttribute('aria-invalid');

        codigoExibido.textContent = '#' + codigo;
        resultado.classList.add('is-visible');
    });
});
