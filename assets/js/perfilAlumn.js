$(document).ready(function(){

if($("#perfil-alumnas").length > 0){
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
  }



/*
    var coder_id = getParameterByName('coder');
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://laboratoria-tw.herokuapp.com/students/"+ coder_id,
      "method": "GET",
      "headers": {
        "cache-control": "no-cache",
        "postman-token": "3fff9c88-9334-0ddf-57af-ac0831b5feae"
      }
    }

    $.ajax(settings).done(function (response) {
      console.log(response);
      var alumna = response[0];

      var cont = $('<div/>');
      
      var contImgName = $('<div/>');
      var imagen = $('<img/>', {'src' : alumna.foto});
      var nameApe = $('<p/>', {'text' : alumna.nombre + alumna.apellido, 'class': 'texto_alum'});


      contImgName.append(imagen);
      contImgName.append(nameApe);
  
      cont.append(contImgName);
      
      $('#perfil').append(cont);


    });
*/
  });
/*
  function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  }*/