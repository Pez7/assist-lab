$(document).ready(function(){
function validarIdJedi(){
	var variableUser= false;
	var idJedi = document.getElementById('userJedi').value;
	for (var i = 0; i < jedi.length; i++ ) {

			var id = jedi[i].username;
			console.log(id + "==" + idJedi);
			if (id != idJedi) {
				
				false;
			} else {
				variableUser = true;
				i= jedi.length;
				console.log(variableUser);
			}
	}

	return variableUser;
}

function validarPassJedi(){
	var variablePass;
	for (var i = 0; i < jedi.length; i++) {
			
		var password = jedi[i].password;
 		var passJedi = $('#passJedi').val();
 		if (password != passJedi) {
 			variablePass = false;
 		} else {
 			variablePass = true;
 			i = jedi.length;
 			console.log(variablePass);
 			
 		}
 	}
	return variablePass;
}

	 	$('#registrar').click(function(event) {
	 		if (validarIdJedi() == false) {
	 			$('#campoUserJedi').append('<p class="errorUsuario center white-text">Ingresa tu usuario de Laboratoria<p>');
	 		}else{
	 			$('.errorUsuario').empty();
	 		}
	 		if (validarPassJedi() == false) {
	 			$('#campoPassJedi').append('<p class="errorCampo center white-text">Ingresa tu contraseña de Laboratoria<p>');
	 		}else{
	 			$('.errorCampo').empty();
	 		}
	 		var valId = validarIdJedi();
	 		console.log(valId + "VALIDACION OK");
	 		if (validarIdJedi() === true && validarPassJedi() === true) {
	 			console.log("pass ok");
	 			window.location.href = "calificacion.html";
	 		}
	 	});

});