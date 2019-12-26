'use strict'


$(document).ready(function() {
    //alert("funcio");

    //llamo a la funcion que movera la foto cuando el scroll este en la posicion
    $(document).on("scroll", function() {
        var desplazamientoActual = $(document).scrollTop();
        if (desplazamientoActual < 310) {
            $("#alexa-perfil").fadeOut('slow');
            $("alexa-perfil").css("margin-top", "20px");
        } else {
            $("#alexa-perfil").fadeIn();
        }
        console.log(desplazamientoActual); //aqui me muestra en tiempo real la posicion de mi scroll
    });




});