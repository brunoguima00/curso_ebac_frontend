const form = document.getElementById('form-calculo')

form.addEventListener('submit',function(e){
    e.preventDefault(); /* O evento que vai ser disparado */

    const campoA = document.getElementById('number-a'); 
    const campoB = document.getElementById('number-b');

    const valorA = parseInt(campoA.value);
    const valorB = parseInt(campoB.value);

    if(valorA < valorB) {
        alert('Formulário Válido');
    } else {
        alert('Formulário Inválido');
    }    
})