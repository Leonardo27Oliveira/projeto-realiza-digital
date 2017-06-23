var pessoas = 0;
$('input[type=button]').click(function(){
	var nome = $('input[name=Nome]').val();
	var idade = $('input[name=Idade]').val();
	if(nome=="" || idade=="" || idade < 1){
		alert('Por favor digite os dados corretamente!');
		return false;
		}
	pessoas++
	$("#Tabela > thead").append("<tr><td>"+nome+"</td><td>"+idade+"</td></tr>");
	$('#pessoas').text(pessoas);
	$('input[name=Nome]').val("")
	$('input[name=Idade]').val("");
});