addEventListener('DOMContentLoaded', () => {
    const botonIrArriba = document.querySelector('#btn-top');

    const obtenerPixelesInicio = () => document.documentElement.scrollTop || document.body.scrollTop;

    const irArriba = () => {
        const inicio = obtenerPixelesInicio();
        const duracion = 1000; // Duración en milisegundos (2 segundos)
        const incremento = inicio / (duracion / 20); // Incremento por fotograma

        const animacion = () => {
            const posicion = obtenerPixelesInicio();
            if (posicion > 0) {
                scrollTo(0, posicion - incremento);
                requestAnimationFrame(animacion);
            }
        };

        animacion();
    };

    const indicadorScroll = () => {
        if (obtenerPixelesInicio() > 200) {
            botonIrArriba.classList.add('mostrar');
        } else {
            botonIrArriba.classList.remove('mostrar');
        }
    };

    botonIrArriba.addEventListener('click', irArriba);
    window.addEventListener('scroll', indicadorScroll);
});

