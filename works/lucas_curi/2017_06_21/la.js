var pessoas = 1;

$("#salvar").on("click", function() {
	var nome = $("[name = nome]").val();
	var idade = $("[name = idade]").val();
	

	if (nome == "") {
		alert("Por favor, forneça todas as informações");
		$("[name = nome]").addClass("erro");
		return false;
	} else if (idade == "") {
		alert("Por favor, forneça todas as informações");
		$("[name = idade]").addClass("erro");
		return false;
	}

	else {
		$("[name = nome]").removeClass("erro");
		$("[name = idade]").removeClass("erro");
		$('.tabela > thead').append("<tr> <td> "+ nome +" </td> <td>"+ idade +" </td> </tr>");
		$("#pessoas").text(pessoas++);
      	$("#nome").focus();
	}
	$(this).next('.tabela').fadeIn(200);
	
});
