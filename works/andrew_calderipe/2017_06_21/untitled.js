var pessoas = 0;
$('body').hide();
$('body').fadeIn(500);
$('#Tabela').hide();
$('#Tabela').fadeIn(1500);

$('input[type=button]').click(function(){
	var nome = $('input[name=Nome]').val();
	var idade = $('input[name=Idade]').val();

	if(nome=="" || idade=="" || idade < 1){
		alert('Por favor digite os dados corretamente!');
		return false;
	}

	pessoas++
	$("tbody").append("<tr class='hcol' id='pes"+pessoas+"'><td>"+nome+"</td><td>"+idade+"</td></tr>");
	$('#pes'+pessoas).hide();
	$('#pessoas').text(pessoas);
	$('input[name=Nome]').val("")
	$('input[name=Idade]').val("");
});

$('.active').on("click", function(){
	$('#pes'+pessoas).fadeIn(500);
});
$("input[name=Procura]").keyup(function () {
    var linhas = $("tbody").find("tr").hide();
    if (this.value.length) {
        var data = this.value.split(" ");
        $.each(data, function (i, v) {
            linhas.filter(":contains('" + v + "')").show();
        });
    } else linhas.show();
});