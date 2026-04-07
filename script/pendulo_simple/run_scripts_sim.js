// Scripts de simuladores
let itsrunning = false; //variable para controlar el estado del cronometro
// Evento 1: Click en el boton ▷ del cronometro
document.getElementById("start").addEventListener("click", function() {
    hidestart();
    hidehidetime();
    if (!itsrunning) { // Itsrunning no esta en funcionamiento, por tanto ejecuto startfun y istruning esta funcionando
        startFun();
        itsrunning = true;
    }
});
// Evento 2: Click en el boton ▉ del cronometro
document.getElementById("stop").addEventListener("click", function() {
    hidestop();
    stopFun();
    itsrunning = false;
});
// Evento 3: Click en el boton ⮌ del cronometro
document.getElementById("restartime").addEventListener("click", function() {
    hiderestartime(); // Inhabilita el boton de regresar
    hidestop(); // Muestra el btn de play y oculta el cuadrito
    restartFun(); // Reinicia el cronometro
    itsrunning = false;
});
// Evento 5: Click en el boton ▉ del simulador en general
document.getElementById("btnstart").addEventListener("click", function() {
    hiderestart();
    btnstep();
    restartFun();   
    itsrunning = false;
    const existingScripts = document.querySelectorAll('script[data-src]');
    existingScripts.forEach(existingScript => {
        const src = existingScript.getAttribute('src');
        if (src === '../../script/pendulo_simple/pendulo_simple.js') {
            restartloop();
        } else if (src === '../../script/pendulo_simple/diagrama.js') {
            restartloopplot();
        } else if (src === '../../script/pendulo_simple/pendulo_simple_2.js') {
            restarttwoloop();
            restartthreeloop();
        }
    });
});
// Evento 6: Click en el boton ▌▌ del simulador en general
document.getElementById("btnstop").addEventListener("click", function () {
    hidebtnstop();
    hidebtnstep();
    if (!itsrunning) {
        startFun();
        itsrunning = true;
    };
    const existingScripts = document.querySelectorAll('script[data-src]');
    existingScripts.forEach(existingScript => {
        const src = existingScript.getAttribute('src');
        if (src === '../../script/pendulo_simple/pendulo_simple.js') {
            loop();
        } else if (src === '../../script/pendulo_simple/diagrama.js') {
            loopplot();
        } else if (src === '../../script/pendulo_simple/pendulo_simple_2.js') {
            looptwo();
            loopthree();
        }
    });
});

// Evento 7: Click en el boton ▶ del simulador en general
document.getElementById("restart").addEventListener("click", function() {
    hiderestart();
    btnstep();
    stopFun();
    itsrunning = false;
    const existingScripts = document.querySelectorAll('script[data-src]');
    existingScripts.forEach(existingScript => {
        const src = existingScript.getAttribute('src');
        if (src === '../../script/pendulo_simple/pendulo_simple.js') {
            stoploop();
        } else if (src === '../../script/pendulo_simple/diagrama.js') {
            stoploopplot();
        } else if (src === '../../script/pendulo_simple/pendulo_simple_2.js') {
            stoplooptwo();
            stoploopthree();
        }
    });
});
// Evento 8: Mostrar el simulador de pendulo simple rojo (sin iniciar)
document.querySelector(".Intro").addEventListener("click", function() {
    hiderestartime(); 
    hidestop(); 
    hiderestart(); 
    btnstep(); 
    restartFun();
    draw();
    stoploopplot();
    stoploopthree();
    stoplooptwo();
});
// Evento 9: Mostrar el simulador de graficas (sin iniciar)
document.querySelector(".Plots").addEventListener("click", function() {
    hiderestartime(); 
    hidestop(); 
    hiderestart(); // cambia al boton pause
    btnstep(); // Inhabilita el boton de adelantar frame
    restartFun(); // Reinicia el crononometro
    drawplot();
    stoploop();
    stoploopthree();
    stoplooptwo();
});
// Evento 10: Mostrar el simulador de pendulo simple azul (sin iniciar)
document.querySelector(".Twoplot").addEventListener("click", function() {
    hiderestartime(); 
    hidestop(); 
    hiderestart(); 
    btnstep(); 
    restartFun();
    drawtwo();
    drawthree();
    stoploop();
    stoploopplot();
});
// Botones para añadir una clase selected a los botones de menu.
const menuItems = document.querySelectorAll('.topmenu > div');// Obtener todos los elementos del menú
// Función para manejar el clic en un elemento del menú
function handleClick(event) {
    // Eliminar la clase 'selected' de todos los elementos del menú
    menuItems.forEach(item => {
        if (item === event.target) {
            item.classList.add('selected')
            item.classList.remove('noselected')
        } else {
            item.classList.remove('selected')
            item.classList.add('noselected')
        }
    });
}
// Asignar el evento de clic a cada elemento del menú
menuItems.forEach(item => {
    item.addEventListener('click', handleClick);
});
// Funciones para añador scripts y actualizar las funciones
function loadScript(scriptSrc) {
    const existingScript = document.querySelector('script[data-src]');
    if (existingScript) {
      existingScript.remove();
    }
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.setAttribute('data-src', ''); // Mark the script as loaded
    document.body.appendChild(script);
  }
  document.querySelectorAll('.topmenu .item').forEach(item => {
    item.addEventListener('click', () => {
      // Remove selected class from all items
      document.querySelectorAll('.topmenu .item').forEach(item => {
        item.classList.remove('selected');
      });
      // Add selected class to the clicked item
      item.classList.add('selected');
      // Load the corresponding script
      if (item.id === 'Intro') {
        loadScript('../../script/pendulo_simple/pendulo_simple.js');
      } else if (item.id === 'Plots') {
        loadScript('../../script/pendulo_simple/diagrama.js');
      } else if (item.id === 'Twoplot') {
        loadScript('../../script/pendulo_simple/pendulo_simple_2.js');
      }
    });
  });
  
// Funcion para activar el cargador de la pagina
$(window).on('load', function () {
      setTimeout(function () {
    $(".loader-page").css({visibility:"hidden",opacity:"0"})
  }, 2000);
});

// Evento: Manejando la funcionalidad de los items del checkbox
document.getElementById("checkbox_first").addEventListener("click", function() {
    hidetimer();
})
