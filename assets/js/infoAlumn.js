$(document).ready(function(){
  //console.log(student);
 //recorrerStudents(student);
   $(".button-collapse").sideNav();
    $("#btn").click(function(){
    	$('#lista').html('');
    var valorJornada = $('#jornada').val();

      var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://laboratoria-tw.herokuapp.com/studentsByJourney/"+ valorJornada,
      "method": "GET",
      "headers": {
        "cache-control": "no-cache",
        "postman-token": "193ecddf-3b07-3a26-accf-f88f22d77723"
      }
      }

      $.ajax(settings).done(function (response) {
        //console.log(response)

        response.forEach(function(el){
        	console.log(el);
               
            var list= $('<li/>', {'class': 'collection-item avatar'});
            var img = $('<img/>',{'src': el.foto , 'class': 'circle'});
            var estudiante = $('<p/>', {'text' : el.nombre + ' ' + el.apellido, 'class' : 'title'});
            var enlace = $('<a/>', {'href': 'perfilAlumna.html?coder=' + el.id});

            list.append(img);
            list.append(estudiante);
            enlace.append(list);
            
             $('#lista').append(enlace);
        })

       /* for (i = 0; i < response.length; i++) {
            text += "<img src="+ response[i].foto + ">" + "<a href=alumna.html?coder="+response[i].id_coder+">"+response[i].nombre + " " + response[i].apellido +"</a><br>";
            console.log(lista[i])
          }*/
      });

    });

  });