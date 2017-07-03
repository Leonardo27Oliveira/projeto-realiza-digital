var pessoas = 0;

$('input[type=button]').click(function(){
	var nome = $('input[type=text]').val();
	var idade = $('input[type=number]').val();

	if(nome=="" || idade==""){
		alert('Por favor digite os dados !!');
		return false;
	}

	$('#tabela').append('<tr><td>'+nome+'</td><td>'+idade+'</td></tr>');
	var nome = $('input[type=text]').val("");
	var idade = $('input[type=number]').val("");
	pessoas++
	$('#total').text(pessoas);

});
