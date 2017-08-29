$(document).ready(function(){
function validarId(){
	var variableUser= false;
	var idCoder = document.getElementById('userCoder').value;
	for (var i = 0; i < studentCredential.length; i++ ) {

			var id = studentCredential[i].id;
			console.log(id + "==" + idCoder);
			if (id != idCoder) {
				
				false;
			} else {
				variableUser = true;
				i= studentCredential.length;
				console.log(variableUser);
			}
	}

	return variableUser;
}

function validarPass(){
	var variablePass;
	for (var i = 0; i < studentCredential.length; i++) {
			
		var password = studentCredential[i].password;
 		var passCoder = $('#passCoder').val();
 		if (password != passCoder) {
 			variablePass = false;
 		} else {
 			variablePass = true;
 			i = studentCredential.length;
 			console.log(variablePass);
 			
 		}
 	}
	return variablePass;
}

	 	$('#sign').click(function(event) {
	 		if (validarId() == false) {
	 			$('#campoUser').append('<p class="errorUsuario center white-text">Ingresa tu usuario de Laboratoria<p>');
	 		}else{
	 			$('.errorUsuario').empty();
	 		}
	 		if (validarPass() == false) {
	 			$('#campoPass').append('<p class="errorCampo center white-text">Ingresa tu contraseña de Laboratoria<p>');
	 		}else{
	 			$('.errorCampo').empty();
	 		}
	 		var valId = validarId();
	 		console.log(valId + "VALIDACION OK");
	 		if (validarId() === true && validarPass() === true) {
	 			console.log("pass ok");
	 			alert("ok");
	 		}
	 	});

});