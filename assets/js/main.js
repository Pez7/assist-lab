$(document).ready(function() {
	var sprintArr = [];
	var cont = 0;
		var squadArr = [];
			for(var i = 0; i < studentCredential.length ; i++){
				
			
				var nombreAlumn = studentCredential[i].first_name + " " + studentCredential[i].last_name;
				var idAlumna = studentCredential[i].id;
				squadArr.push({"nombreAlumn": nombreAlumn, "idcoder": idAlumna});
				cont++;
			if(cont == 6){
				sprintArr.push(squadArr);
				cont = 0;
				squadArr = [];
			}
		}
	console.log(sprintArr);


	$("#select-sprint").on("change", function(){
		
		var valueSprint = $("#select-sprint").val();
		$(".contenido-sprint").empty();
		$(".info-squad").empty();
		console.log(sprint[valueSprint]);

		var nombreSprint = $("<h5>").attr('class', 'nombre-sprint').text(sprint[valueSprint].nombre_sprint);
		var objetivosSprint = $("<p>").attr('class', 'objetivos-sprint').text(sprint[valueSprint].objetivo);

		$(".contenido-sprint").append(nombreSprint);
		$(".contenido-sprint").append(objetivosSprint);

		sprintArr[valueSprint].forEach(function(el){
			var alumnSquad = $("<p>").text(el.nombreAlumn);
			$(".info-squad").append(alumnSquad);
		});
	});



	
});