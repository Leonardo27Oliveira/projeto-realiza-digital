$("table")[0].style.visibility = "hidden";
$("#footer")[0].style.visibility = "hidden";
var table = $("table")[0];
var footer = table.createTBody();

$("button").on("click", function registrar() {
	var nome = $("#nome").val();
	var idade = $("#idade").val();

	if (nome == "") {
		alert("O campo do nome deve ser preenchido.");
		$("#nome").addClass("erro");
		return false;
	} else {
		$("#nome").removeClass("erro");
	}
	if (idade == "") {
		alert("O campo da idade deve ser preenchido.");
		$("#idade").addClass("erro");
		return false;
	} else {
		$("#idade").removeClass("erro");
	}

    var row = footer.insertRow(0);
    var cell = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell.innerHTML = nome;
    cell2.innerHTML = idade;
    $("table")[0].style.visibility = "visible";
    $("#footer")[0].style.visibility = "visible";
});