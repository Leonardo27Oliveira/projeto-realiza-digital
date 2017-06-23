var pessoas = 0;
$("button[name=salvar]").click(function() {
	var nome = $("[name=nome]").val();
	var idade = $("[name=idade]").val();
	if(nome=="" || idade=="" || idade < 1){
		alert("Por favor digite os dados corretamente");
		return false;
	}
	pessoas++
	$("#tabela > thead").append("<tr><td>"+nome+"</td><td>"+idade+"</td></td>");
	$("#pessoas").text(pessoas);
	$("[name=nome]").val("")
	$("[name=idade]").val("");
});