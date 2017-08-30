//FUNICONALIDAD MARCELA
$(document).ready(function() {
	var sprintArr = [];
	var cont = 0;
		var squadArr = [];
			for(var i = 0; i < studentCredential.length ; i++){
				
			
				var nombreAlumn = studentCredential[i].first_name + " " + studentCredential[i].last_name;
				var idAlumna = studentCredential[i].id;
				var fotoAlumna = studentCredential[i].photo;
				squadArr.push({"nombreAlumn": nombreAlumn, "idcoder": idAlumna, "fotoAlumna": fotoAlumna});
				cont++;
			if(cont == 6){
				sprintArr.push(squadArr);
				cont = 0;
				squadArr = [];
			}
		}
	console.log(sprintArr);

	var contImg = 1;
	$("#select-sprint").on("change", function(){
		var notasAlumnas1 = 0;
		var notasAlumnas2 = 0;
		var notasAlumnas3 = 0;
		$(".striped").show();
		$("#notas1").empty();$("#notas1").empty()
		$("#jorn1").empty();
		var valueSprint = $("#select-sprint").val();
		$(".contenido-sprint").empty();
		$(".info-squad").empty();
		console.log(sprint[valueSprint]);

		var nombreSprint = $("<h5>").attr('class', 'nombre-sprint').text(sprint[valueSprint].nombre_sprint);
		var objetivosSprint = $("<p>").attr('class', 'objetivos-sprint').text(sprint[valueSprint].objetivo);

		$(".contenido-sprint").append(nombreSprint);
		$(".contenido-sprint").append(objetivosSprint);

		sprintArr[valueSprint].forEach(function(el){
			var foto = $('<img src="'+el.fotoAlumna+'">');
			var alumnSquad = $('<a href=alumna.html?coder='+el.idcoder+'>'+el.nombreAlumn + '</a>');
			$("#img-nombre-"+contImg).append(foto);
			$("#img-nombre-"+contImg).append(alumnSquad);
			contImg++;
		});

	});


/*if($("#alumna-info").length > 0){
    $(document).ready(function(){
    	//console.log(sprintArr[0][0].idcoder);
    	var coder_id = getParameterByName('coder');
    	console.log(coder_id);
    	function findStudent(student) { 
		    return student.id == coder_id;
		}

		console.log(studentCredential.find(findStudent)); 

    });
}

function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  }*/
	
});
//FIN FUNCIONALIDAD MARCELA