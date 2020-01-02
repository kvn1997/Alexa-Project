//funcion de JavaScript que fuerza a la pagina a la pagina a posicionarse
//al principio cada vez que le de refresh
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

$(document).ready(function() {

    //llamo a la funcion que movera la foto cuando el scroll este en la posicion
    $(document).on("scroll", function() {
        var imgAlePerf = $('#alexa-perfil');
        var botonProy = $("#btn-proyectos");
        var desplazamientoActual = $(document).scrollTop();

        //estos 4(250, 40, 300 y 400) valores son importantes para lograr el efecto de la imagen que sube
        //mientras que vas bajando en la pagina web. Y también la linea imgAlePerf.stop().animate();
        //
        if (desplazamientoActual >= 250) {
            imgAlePerf.animate({ marginTop: 40 }, 800);
            imgAlePerf.fadeTo(1000, 1);
        }
        if (desplazamientoActual < 245) {
            imgAlePerf.stop().animate();
            imgAlePerf.stop().animate();
            imgAlePerf.animate({ marginTop: 400 });
            imgAlePerf.fadeTo(100, 0.1);
        }
        console.log(desplazamientoActual);

        //condiciones para el boton
        if (desplazamientoActual >= 880) {
            //botonProy.fadeIn();
            botonProy.animate({ marginTop: 20 }, 1000);
            console.log("soy un boton");
        }
        // if (desplazamientoActual < 1000) {
        //     botonProy.stop().animate();
        //     botonProy.stop().animate();
        //     botonProy.animate({ marginTop: -35 });
        // }

    });
});