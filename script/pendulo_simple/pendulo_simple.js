// Constantes Generales
let t = 0; // Tiempo en segundos

// Variables Generales
let canvas, ctx;

const scale = 5;
const containertable = document.querySelector(".container-table"); // Extraer el ID tamaño del contenedor
const rect = containertable.getBoundingClientRect(); // Extraer el tamaño del contenedor
const canvasWidth = rect.width; // Utilizar como variable

// Variable para almacenar la IdS de la animcacion
var animationId; // Animacion de Pendulo Rojo

// Funciones Generales para todos los simuladores
function setup() {
  canvas = document.getElementById("canvas_simulador");
  ctx = canvas.getContext("2d");
  canvas.height = 427;
  canvas.width = canvasWidth;
}

// SIMULADOR DEL PENDULO SIMPLE ROJO
let theta = -Math.PI / 2; // Ángulo inicial del péndulo rojo
let omega = 0; // Velocidad angular inicial del péndulo rojo
const history = []; // History del pendulo rojo

const timeselect = () => {
  const Cnormal = document.getElementById("Cnormal");
  const Cslow = document.getElementById("Cslow"); 
  if (Cnormal.checked) {
    return 0.1;
  } else if (Cslow.checked) {
    return 0.01;
  } else {
    return 0.1
  }
};

function update() {
  // Extrae la longitud del péndulo ingresado en el HTML
  var l = parseFloat(document.getElementById("l").value); 
  // Vota el valor l seleccionado del rango
  const value = document.querySelector("#valuel")            
  const input = document.querySelector("#l")
  value.textContent = (input.value / 10).toFixed(0) 
  input.addEventListener("input", (event) => {
    value.textContent = (event.target.value / 10).toFixed(0)
  })
  // Vota el valor m1 seleccionado del rango
  var m1 = parseFloat(document.getElementById("m1").value);
  const valuem1 = document.querySelector("#valuem1")            
  const inputm1 = document.querySelector("#m1")
  valuem1.textContent = (inputm1.value / 10).toFixed(0)
  inputm1.addEventListener("input", (event) => {
    valuem1.textContent = (event.target.value / 10).toFixed(0)
  })

  var g = parseFloat(document.getElementById("gravedad").value);
  var b = parseFloat(document.getElementById("friccion").value);

  const alpha = - (b / (m1 * l ^ 2)) * omega - (g / l) * Math.sin(theta);
  const timeStep = timeselect(); 
  omega += alpha * timeStep; 
  theta += omega * timeStep;
  const centerX = canvas.width / 2; // Calcular la nueva posición de la masa
  const centerY = 50; // Posición vertical fija para el péndulo simple
  const x = centerX + l * scale * Math.sin(theta); // Componente en x de m1
  const y = centerY + l * scale * Math.cos(theta); // Componente en y de m1
  history.push([x, y]);
}

function drawHistory() {
  const tail = document.getElementById("checkbox-second");
  // Dibujar el historial del péndulo
  for (let i = 1; i < history.length; i++) {
    ctx.lineWidth = 1;
    const opacity = i / history.length; // Defino la opacidad en funcion de el history
    ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`; // Defino el color de la linea con rgba(,) y su opacidad
    ctx.beginPath(); // Comienzo un nuevo trazo
    ctx.moveTo(history[i-1][0], history[i-1][1]); // Muevo el trazo a otra posicion. Posicion inicial
    ctx.lineTo(history[i][0], history[i][1]); // Muevo el trazo a una posicion final. Dibujo el trazo
    if (tail.checked) {
      ctx.stroke();
    };
  }
}

function draw() {
  // Limpiar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 1;
  // Dibujar el péndulo
  var l = parseFloat(document.getElementById("l").value); // Saca el numero de la variable l
  var m1 = parseFloat(document.getElementById("m1").value); // Saca el numero de la variable m1
  const centerX = canvas.width / 2;
  const centerY = 50; // Posición vertical fija para el péndulo simple
  const x = centerX + l * scale * Math.sin(theta);
  const y = centerY + l * scale * Math.cos(theta);
  // Dibujar el péndulo
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(x, y);
  ctx.stroke();
  // Dibujar una caja de adorno.
  ctx.fillStyle = "gray"; 
  ctx.fillRect(centerX, centerY, -25, -15);
  ctx.fillStyle = "gray";
  ctx.fillRect(centerX, centerY,  25, -15);
  // Dibuja el rastro del pendulo
  drawHistory();
  // Dibujar la masa del péndulo
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(x, y, m1, 0, 2 * Math.PI);
  ctx.fill();
}

function loop() {
  draw();
  update();
  animationId = requestAnimationFrame(loop);
}

function stoploop() {
  cancelAnimationFrame(animationId);
}

function restartloop() {
  cancelAnimationFrame(animationId);
  theta = -Math.PI / 2;
  omega = 0;
  t = 0;
  history.length = 0; // Limpiar el historial de posiciones
  // Llamar a la función de dibujo para reiniciar la pantalla
  draw();
  stoploop();
}

setup();
draw();