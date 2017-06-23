$("#botao").click(function(){
	
	var nome = $("input[name=nome]").val();
	var idade = $("input[name=idade]").val();

    $("#lista").append("<tr><td>" + nome + "</td><td>" + idade + "</td></tr>");


});






