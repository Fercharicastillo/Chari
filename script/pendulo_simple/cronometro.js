// CREAR EL CRONOMETRO
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var millisecondsLabel = document.getElementById("miliseconds");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var btnstart = document.getElementById("btnstart");

var totalMilliseconds = 0;
var myInterval;

function setTime() {
  ++totalMilliseconds;
  millisecondsLabel.innerHTML = pad(totalMilliseconds % 100);

  if (totalMilliseconds % 100 === 0) {
    secondsLabel.innerHTML = pad(Math.floor(totalMilliseconds / 100) % 60);
    if (totalMilliseconds % 6000 === 0) {
      minutesLabel.innerHTML = pad(Math.floor(totalMilliseconds / (100 * 60)));
    }
  }
}

function pad(valor) {if (valor < 10) { // AñADE CEROS DE SER NECESARIO, PARA DAR LA ILUSCION DE 00:00:00
	return "0" + valor;
  } else {
	return "" + valor;
	}
}

function startFun() { // INICIAR EL CRONOMETRO
  myInterval = setInterval(setTime, 10); // Ejecutar cada milisegundo
}

function stopFun() { //PARAR EL CRONOMETRO
  clearInterval(myInterval);
}

function restartFun() { // REINICIAR TOTALMENTE EL CRONOMETRO
  // Detener el intervalo activo, si hay alguno
  clearInterval(myInterval);
  // Restablecer todas las variables relacionadas con el tiempo
  totalMilliseconds = 0;
  millisecondsLabel.innerHTML = "00";
  secondsLabel.innerHTML = "00";
  minutesLabel.innerHTML = "00";
};

// Funcion para ocultar el reloj
function hidetimer() {
  var timer = document.getElementById("timer")
  if (timer.style.display === "block") {
    timer.style.display = "none";
  } else {
    timer.style.display = "block";
  }
};

// Funcion para arrastrar y soltar un div


const drag = (evt) => {
  const containertable = document.querySelector(".container-table"); 
  const rect = containertable.getBoundingClientRect(); 
  const canvasWidth = rect.width; 
  const canvasheight = rect.height; 

  const el = evt.currentTarget;
  el.style.touchAction = "none";
  
  const move = (evt) => {
  // Calcular la nueva posición del elemento
  const newLeft = el.offsetLeft + evt.movementX;
  const newTop = el.offsetTop + evt.movementY;

  // Limitar la posición izquierda
  if (newLeft < 0) {
    el.style.left = "0px";
  } else if (newLeft + el.offsetWidth > canvasWidth) {
    el.style.left = `${canvasWidth - el.offsetWidth}px`;
  } else {
    el.style.left = `${newLeft}px`;
  }

  // Limitar la posición superior
  if (newTop < 0) {
    el.style.top = "0px";
  } else if (newTop + el.offsetHeight > canvasheight) {
    el.style.top = `${canvasheight - el.offsetHeight}px`;
  } else {
    el.style.top = `${newTop}px`;
  }
  };

  const up = () => {
    removeEventListener("pointermove", move);
    removeEventListener("pointerup", up);
  };
  
  addEventListener("pointermove", move);
  addEventListener("pointerup", up);
};

document.getElementById("timer").addEventListener("pointerdown", drag);
