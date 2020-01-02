$(document).ready(function() {




    //llamo a la funcion que movera la foto cuando el scroll este en la posicion
    $(document).on("scroll", function() {
        var imgAlePerf = $('#alexa-perfil');
        var desplazamientoActual = $(document).scrollTop();



        if (desplazamientoActual >= 250) {
            imgAlePerf.animate({ marginTop: 40 }, 1000);
        }
        if (desplazamientoActual < 300) {
            imgAlePerf.stop().animate();
            imgAlePerf.animate({ marginTop: 400 });
        }
        console.log(desplazamientoActual);
    });

    // $(window).scroll(function() {
    //     var imgAlePerf = $('#alexa-perfil');
    //     var top = $(window).scrollTop();
    //     if (top < 300) {
    //         imgAlePerf.fadeIn();
    //     }
    // });





    // $(document).on("scroll", function() {
    //     var imgAlePerfil = $('#alexa-perfil');
    //     var valorDesplazamiento = $(document).scrollTop();

    //     function bajarImgAlexaPerf() {
    //         imgAlePerfil.animate({ marginBottom: 15 }, 1000)

    //     }

    //     if (valorDesplazamiento < 300) {
    //         console.log("sdgsdg");
    //         bajarImgAlexaPerf();
    //     }
    //     console.log(desplazamientoActual); //aqui me muestra en tiempo real la posicion de mi scroll
    // });



});