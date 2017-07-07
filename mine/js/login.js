var api = "http://192.168.20.91:8085/";

$('form').on('submit', function() {
	var data = {};

	$(this).serializeArray().map(function(item) {
		data[item.name] = item.value;
	});

	$.ajax({
		type: 'POST',
		url: api + 'login',
		data: data,
		success: function (res) {
			console.log(res);
		},
		error: function (res) {
			console.log(res.responseJSON.error.message);
		}
	})

	return false;
})
