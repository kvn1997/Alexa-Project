$(document).ready(function() {

    //llamo a la funcion que movera la foto cuando el scroll este en la posicion
    $(document).on("scroll", function() {
        var imgAlePerf = $('#alexa-perfil');
        var botonProy = $("btn-proyectos");
        var desplazamientoActual = $(document).scrollTop();

        //estos 4(250, 40, 300 y 400) valores son importantes para lograr el efecto de la imagen que sube
        //mientras que vas bajando en la pagina web. Y también la linea imgAlePerf.stop().animate();
        if (desplazamientoActual >= 250) {
            imgAlePerf.animate({ marginTop: 40 }, 1000);
        }
        if (desplazamientoActual < 300) {
            imgAlePerf.stop().animate();
            imgAlePerf.stop().animate();
            imgAlePerf.animate({ marginTop: 400 });
        }
        console.log(desplazamientoActual);

        //condiciones para el boton
        if (desplazamientoActual >= 1100) {
            botonProy.animate({ marginTop: 35 }, 1000);
        }
        // if (desplazamientoActual < 1000) {
        //     botonProy.stop().animate();
        //     botonProy.stop().animate();
        //     botonProy.animate({ marginTop: -35 });
        // }

    });
});