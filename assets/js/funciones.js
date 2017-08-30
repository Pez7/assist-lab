 function redireccionar() {
    setTimeout("location.href='http://www.login.cl'", 3000);
  }

    $(document).ready(function() {
    $('select').material_select();

    $(".striped").hide();
    var notasAlumnas1 = 0;
    $('#notasAl1').bind("enterKey",function(e){
   		var valorNota = $(this).val();
   		$("#notas1").empty();
   		notasAlumnas1 += parseInt(valorNota);
   		console.log(valorNota);
   		var notaAcumulada = $("<p>").text(notasAlumnas1+ " puntos");
   		$("#notas1").append(notaAcumulada);

	});
	var notasAlumnas2 = 0;
    $('#notasAl2').bind("enterKey",function(e){
   		var valorNota = $(this).val();
   		$("#notas2").empty();
   		notasAlumnas2 += parseInt(valorNota);
   		console.log(valorNota);
   		var notaAcumulada = $("<p>").text(notasAlumnas2+ " puntos");
   		$("#notas2").append(notaAcumulada);

	});
	var notasAlumnas3 = 0;
    $('#notasAl3').bind("enterKey",function(e){
   		var valorNota = $(this).val();
   		$("#notas3").empty();
   		notasAlumnas1 += parseInt(valorNota);
   		console.log(valorNota);
   		var notaAcumulada = $("<p>").text(notasAlumnas3+ " puntos");
   		$("#notas3").append(notaAcumulada);

	});
	$('.input-nota').keyup(function(e){
    if(e.keyCode == 13)
    {
        $(this).trigger("enterKey");
    }
});


    var porcentajeAsistencia1 = 100;
    $("#jornada1").on("change", function(){
    	var valorAsist = $(this).val();
    	$("#jorn1").empty();
    	console.log(valorAsist);
    	if(valorAsist == "presente"){
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia1+"%");
    		$("#jorn1").append(asistencia);
    	}
    	if(valorAsist == "faltajust"){
    		porcentajeAsistencia1 = porcentajeAsistencia1 * 0.9;
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia1+"%");
    		$("#jorn1").append(asistencia);
    	}
    	if(valorAsist == "faltainjust"){
    		porcentajeAsistencia1 = porcentajeAsistencia1 * 0;
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia1+"%");
    		$("#jorn1").append(asistencia);
    	}
    	if(valorAsist == "atrasojust"){
    		porcentajeAsistencia1 = porcentajeAsistencia1 * 0.97;
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia1+"%");
    		$("#jorn1").append(asistencia);
    	}
    	if(valorAsist == "atrasoInjust"){
    		porcentajeAsistencia1 = porcentajeAsistencia1 * 0;
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia1+"%");
    		$("#jorn1").append(asistencia);
    	}
   
    });

    var porcentajeAsistencia2 = 100;
     $("#jornada2").on("change", function(){
    	var valorAsist = $(this).val();
    	$("#jorn2").empty();
    	console.log(valorAsist);
    	if(valorAsist == "presente"){
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia2+"%");
    		$("#jorn2").append(asistencia);
    	}
    	if(valorAsist == "faltajust"){
    		porcentajeAsistencia2 = porcentajeAsistencia2 * 0.9;
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia2+"%");
    		$("#jorn2").append(asistencia);
    	}
    	if(valorAsist == "faltainjust"){
    		porcentajeAsistencia2 = porcentajeAsistencia2 * 0;
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia2+"%");
    		$("#jorn2").append(asistencia);
    	}
    	if(valorAsist == "atrasojust"){
    		porcentajeAsistencia2 = porcentajeAsistencia2 * 0.97;
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia2+"%");
    		$("#jorn2").append(asistencia);
    	}
    	if(valorAsist == "atrasoInjust"){
    		porcentajeAsistencia2 = porcentajeAsistencia2 * 0;
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia2+"%");
    		$("#jorn2").append(asistencia);
    	}
   
    });
     var porcentajeAsistencia3 = 100;
	$("#jornada3").on("change", function(){
		var valorAsist = $(this).val();
		$("#jorn3").empty();
		console.log(valorAsist);
		if(valorAsist == "presente"){
			var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia3+"%");
			$("#jorn3").append(asistencia);
		}
		if(valorAsist == "faltajust"){
			porcentajeAsistencia3 = porcentajeAsistencia3 * 0.9;
			var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia3+"%");
			$("#jorn3").append(asistencia);
		}
		if(valorAsist == "faltainjust"){
			porcentajeAsistencia3 = porcentajeAsistencia3 * 0;
			var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia3+"%");
			$("#jorn3").append(asistencia);
		}
		if(valorAsist == "atrasojust"){
			porcentajeAsistencia3 = porcentajeAsistencia3 * 0.97;
			var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia3+"%");
			$("#jorn3").append(asistencia);
		}
		if(valorAsist == "atrasoInjust"){
			porcentajeAsistencia3 = porcentajeAsistencia3 * 0;
			var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia3+"%");
			$("#jorn3").append(asistencia);
		}

	});
	var porcentajeAsistencia4 = 100;
	$("#jornada4").on("change", function(){
    	var valorAsist = $(this).val();
    	$("#jorn4").empty();
    	console.log(valorAsist);
    	if(valorAsist == "presente"){
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia4+"%");
    		$("#jorn4").append(asistencia);
    	}
    	if(valorAsist == "faltajust"){
    		porcentajeAsistencia4 = porcentajeAsistencia4 * 0.9;
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia4+"%");
    		$("#jorn4").append(asistencia);
    	}
    	if(valorAsist == "faltainjust"){
    		porcentajeAsistencia4 = porcentajeAsistencia4 * 0;
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia4+"%");
    		$("#jorn4").append(asistencia);
    	}
    	if(valorAsist == "atrasojust"){
    		porcentajeAsistencia4 = porcentajeAsistencia4 * 0.97;
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia4+"%");
    		$("#jorn4").append(asistencia);
    	}
    	if(valorAsist == "atrasoInjust"){
    		porcentajeAsistencia4 = porcentajeAsistencia4 * 0;
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia4+"%");
    		$("#jorn4").append(asistencia);
    	}
   
    });
	var porcentajeAsistencia5 = 100;
	$("#jornada5").on("change", function(){
    	var valorAsist = $(this).val();
    	$("#jorn5").empty();
    	console.log(valorAsist);
    	if(valorAsist == "presente"){
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia5+"%");
    		$("#jorn5").append(asistencia);
    	}
    	if(valorAsist == "faltajust"){
    		porcentajeAsistencia5 = porcentajeAsistencia5 * 0.9;
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia5+"%");
    		$("#jorn5").append(asistencia);
    	}
    	if(valorAsist == "faltainjust"){
    		porcentajeAsistencia5 = porcentajeAsistencia5 * 0;
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia5+"%");
    		$("#jorn5").append(asistencia);
    	}
    	if(valorAsist == "atrasojust"){
    		porcentajeAsistencia5 = porcentajeAsistencia5 * 0.97;
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia5+"%");
    		$("#jorn5").append(asistencia);
    	}
    	if(valorAsist == "atrasoInjust"){
    		porcentajeAsistencia5 = porcentajeAsistencia5 * 0;
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia5+"%");
    		$("#jorn5").append(asistencia);
    	}
   
    });
	var porcentajeAsistencia6 = 100;
     $("#jornada6").on("change", function(){
    	var valorAsist = $(this).val();
    	$("#jorn6").empty();
    	console.log(valorAsist);
    	if(valorAsist == "presente"){
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia6+"%");
    		$("#jorn6").append(asistencia);
    	}
    	if(valorAsist == "faltajust"){
    		porcentajeAsistencia6 = porcentajeAsistencia6 * 0.9;
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia6+"%");
    		$("#jorn6").append(asistencia);
    	}
    	if(valorAsist == "faltainjust"){
    		porcentajeAsistencia6 = porcentajeAsistencia6 * 0;
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia6+"%");
    		$("#jorn6").append(asistencia);
    	}
    	if(valorAsist == "atrasojust"){
    		porcentajeAsistencia6 = porcentajeAsistencia6 * 0.97;
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia6+"%");
    		$("#jorn6").append(asistencia);
    	}
    	if(valorAsist == "atrasoInjust"){
    		porcentajeAsistencia6 = porcentajeAsistencia6 * 0;
    		var asistencia = $("<p>").attr('class', 'assist-porcent').text(porcentajeAsistencia6+"%");
    		$("#jorn6").append(asistencia);
    	}
   
    });
    	

  });
