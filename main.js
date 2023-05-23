$(document).ready(function(){

    $("form").on("submit",function(e){

        e.preventDefault();
        const novaTarefa = $("#nova-tarefa").val();

        const novoItem = $(`<li>${novaTarefa}</li>`);
    
        $(novoItem).appendTo("ul");

        $("#nova-tarefa").val("");

    $("ul").on("click","li",function(){
        $(this).addClass("feito");
    })
    
    })
})