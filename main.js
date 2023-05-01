const form = document.getElementById('form-calculo')

form.addEventListener('submit',function(e){
    e.preventDefault(); /* O evento que vai ser disparado */

    const campoA = document.getElementById('number-a'); 
    const campoB = document.getElementById('number-b');
    parseInt(campoA);
    parseInt(campoB);

    if(campoA.value < campoB.value) {
        alert('Formulário Válido');
    } else {
        alert('Formulário Inválido');
    }    
})