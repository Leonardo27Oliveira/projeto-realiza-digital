
$("#botao").on("click", function(){
           
	var nome = $("input[name=nome]").val();
	var idade = $("input[name=idade]").val();

	if(nome =="" || idade =="") {
		alert("Campo de nome deve ser preenchido");
		 return false;
	}else{
		$("#n").text(nome);
		$("#i").text(idade);	
	}	

 });
