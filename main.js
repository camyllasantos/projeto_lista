const form = document.getElementById('form-list')
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputAdicioneNome = document.getElementById('adicione-nome');
    const inputAdicioneNumero = document.getElementById('adicione-numero');

    alert(`Adicione: ${inputAdicioneNome.value} - Numero: ${inputAdicioneNumero.value} `);
});


