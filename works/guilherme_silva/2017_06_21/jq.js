	var pessoas = 0;
	$("input[type=button]").on("click", function(){
		var nome = $("[name=nome]").val();
		var idade = $("[name=idade]").val();
		if (nome==""){
			alert("campo nome deve ser preenchido");
			$("[name=nome]").addClass("error");
			return false;
		}else{
			$("[name=nome]").removeClass("error");
		}
		if (idade==""){
			alert("campo  idade deve ser preenchido");
			$("[name=idade]").addClass("error");
			return false;
		}else{
			$("[name=idade]").removeClass("error");
		}
		pessoas++
		$("#Tabela > thead").append("<tr><td>"+nome+"</td>"+"<td>"+idade+"</td></tr>")
		$("#pessoas").text(pessoas)
	});
