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
    var jediArr = ["Blanca Perez", "Belén Recabal", "Allison Guzman", "Alexandra Neira", "Marcia Millanao", "Nadia Tapia", "Viviana Segura"];
    var contImgAl = 1;
    var contJedi = 0;
    $("#select-sprint-al").on("change", function(){
        $(".stripedAl").show();
        var valueSprint = $("#select-sprint-al").val();
        $(".contenido-sprint-al").empty();
        $(".info-squad-al").empty();
        console.log(sprint[valueSprint]);
        var nombreSprint = $("<h5>").attr('class', 'nombre-sprint').text(sprint[valueSprint].nombre_sprint);
        var objetivosSprint = $("<p>").attr('class', 'objetivos-sprint').text(sprint[valueSprint].objetivo);
        var nombreJedi = $("<p>").attr('class', 'nombre-jedi').text("Tu Jedi Master es: "+jediArr[contJedi]);
        $(".contenido-sprint-al").append(nombreSprint);
        $(".contenido-sprint-al").append(objetivosSprint);
        $(".contenido-sprint-al").append(nombreJedi);
        contJedi++;
        var foto = $('<img src="https://robohash.org/quiamolestiaevoluptatem.png?size=50x50&set=set1">');
        var alumnSquad = $('<a class="black-text" href=alumna.html?coder=SCL20171113>Mitchell Gloy</a>');
        var espacioInfo = $("<div>").attr('class', 'espacioInfo');
        espacioInfo.append(foto);
        espacioInfo.append(alumnSquad);
        $(".info-squad-al").append(espacioInfo);
        sprintArr[valueSprint].forEach(function(el){
            var foto = $('<img src="'+el.fotoAlumna+'">');
            var alumnSquad = $('<a class="black-text" href=alumna.html?coder='+el.idcoder+'>'+el.nombreAlumn + '</a>');
            var espacioInfo = $("<div>").attr('class', 'espacioInfo');
            espacioInfo.append(foto);
            espacioInfo.append(alumnSquad);
            $(".info-squad-al").append(espacioInfo);
            contImgAl++;
            console.log(el.idcoder + " " + contImgAl);
        });
        //$(".info-squad-al")[6].empty();
        $( ".info-squad-al div:last-child" ).hide();
    });
    
});