const form = document.getElementById('form-list');
let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputAdicioneNome = document.getElementById('adicione-nome');
    const inputAdicioneNumero = document.getElementById('adicione-numero');

    let linha = '<tr>';
    linha += `<td>${inputAdicioneNome.value}</td>`;
    linha += `<td>${inputAdicioneNumero.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const linhaTabela = document.querySelector('tbody');
    linhaTabela.innerHTML = linhas;

    inputAdicioneNome.value = '';
    inputAdicioneNumero.value = '';
})