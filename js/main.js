$('document').ready(function(){
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules:{
            nomeCompleto:{
                required: true
            },
            email:{
                required: true,
                email:true
            },
            telefone:{
                required:true
            },
            cpf:{
                required: true
            },
            enderecoCompleto:{
                required: true
            },
            cep: {
                required: true
            }    
        },
        messages:{
            nomeCompleto: 'Por favor digite seu nome',
            email: 'Por favor, digite seu e-mail',
            telefone: 'Por favor, digite seu telefone',
            cpf: 'Por favor, digite seu cpf',
            enderecoCompleto: 'Por favor, digite seu endereço completo',
            cep: 'Por favor, digite seu cep'
        },     
    })
})