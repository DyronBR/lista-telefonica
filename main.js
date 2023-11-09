const form = document.getElementById('form-agenda');
const contato = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adcionaLinha();
    atualizaTabela();
});

function adcionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    if (contato.includes(inputNomeContato.value)) {
        alert (`${inputNomeContato.value} já consta na sua agenda!`);
    } else {
        contato.push(inputNomeContato.value);

        const telefoneFormatado = formatarTelefone(inputNumeroTelefone.value);
        telefone.push(telefoneFormatado);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${telefoneFormatado}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
}

function formatarTelefone(numero) {

    const numeroLimpo = numero.replace(/\D/g, '');
    return `(${numeroLimpo.slice(0, 2)})${numeroLimpo.slice(2, 7)}-${numeroLimpo.slice(7)}`;
}

function atualizaTabela() {
    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

