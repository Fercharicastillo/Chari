// Constantes
const g = 9.81; // Aceleración debido a la gravedad en m/s^2

const containertable = document.querySelector(".container-table"); // Extraer el ID tamaño del contenedor
const rect = containertable.getBoundingClientRect(); // Extraer el tamaño del contenedor
const canvasWidth = rect.width;

// Variables
let canvas, ctx;
let theta1 = 3*Math.PI / 4; // Ángulo inicial del primer péndulo en radianes
let theta2 = Math.PI / 2; // Ángulo inicial del segundo péndulo en radianes
let omega1 = 0; // Velocidad angular inicial del primer péndulo en rad/s
let omega2 = 0; // Velocidad angular inicial del segundo péndulo en rad/s
const timeStep = 0.1; // Paso de tiempo en segundos
let t = 0; // Tiempo en segundos
const history1 = [];
const history2 = [];
const historyLength = 1000; // Longitud del historial en pasos de tiempo

for (let i = 0; i < historyLength; i++) {
  history1.push([295, 203]);
  history2.push([395, 203]);
}

// Funciones
function setup() {
  canvas = document.getElementById("canvas_simulador");
  ctx = canvas.getContext("2d");
  canvas.width = canvasWidth;
  canvas.height = 427;
}

function update() {
  // Extrae el valor l1 ingresado en el HTML
  var l1 = parseFloat(document.getElementById("l1").value); 
  // Vota el valor l1 selecionado del rango
  const value = document.querySelector("#valuel1")            
  const input = document.querySelector("#l1")
  value.textContent = input.value
  input.addEventListener("input", (event) => {
    value.textContent = event.target.value
  })
  // Extrae el valor l2 ingresado en el HTML
  var l2 = parseFloat(document.getElementById("l2").value);
  // Vota el valor l2 selecionado del rango
  const valuel2 = document.querySelector("#valuel2")            
  const inputl2 = document.querySelector("#l2")
  valuel2.textContent = inputl2.value
  inputl2.addEventListener("input", (event) => {
    valuel2.textContent = event.target.value
  })
  // Extraer el valor m1
  var m1 = parseFloat(document.getElementById("m1").value);
  // Mostrar el valor m1
  const valuem1 = document.querySelector("#valuem1")            
  const inputm1 = document.querySelector("#m1")
  valuem1.textContent = inputm1.value
  inputm1.addEventListener("input", (event) => {
    valuem1.textContent = event.target.value
  })
  // Extraer el valor m2
  var m2 = parseFloat(document.getElementById("m2").value);
  // Mostrar el valor m2
  const valuem2 = document.querySelector("#valuem2")            
  const inputm2 = document.querySelector("#m2")
  valuem2.textContent = inputm2.value
  inputm2.addEventListener("input", (event) => {
    valuem2.textContent = event.target.value
  })
  // Calcular las aceleraciones angulares
  const alpha1 = (-g * (2 * m1 + m2) * Math.sin(theta1) - m2 * g * Math.sin(theta1 - 2 * theta2) - 2 * Math.sin(theta1 - theta2) * m2 * (omega2 * omega2 * l2 + omega1 * omega1 * l1 * Math.cos(theta1 - theta2))) / (l1 * (2 * m1 + m2 - m2 * Math.cos(2 * theta1 - 2 * theta2)));
  const alpha2 = (2 * Math.sin(theta1 - theta2) * (omega1 * omega1 * l1 * (m1 + m2) + g * (m1 + m2) * Math.cos(theta1) + omega2 * omega2 * l2 * m2 * Math.cos(theta1 - theta2))) / (l2 * (2 * m1 + m2 - m2 * Math.cos(2 * theta1 - 2 * theta2)));

  // Actualizar las velocidades angulares
  omega1 += alpha1 * timeStep;
  omega2 += alpha2 * timeStep;

  // Actualizar los ángulos
  theta1 += omega1 * timeStep;
  theta2 += omega2 * timeStep;

  // Calcular las nuevas posiciones de las masas
  const centerX = canvas.width / 2;
  const centerY = 100;
  const x1 = centerX + l1 * Math.sin(theta1);
  const y1 = centerY + l1 * Math.cos(theta1);
  const x2 = x1 + l2 * Math.sin(theta2);
  const y2 = y1 + l2 * Math.cos(theta2);

  // Actualizar historial de posiciones
  history1.shift();
  history1.push([x1, y1]);
  history2.shift();
  history2.push([x2, y2]);

  // Incrementar el tiempo
  t += timeStep;
  const timer = document.getElementById("timer");
  timer.textContent = `${t.toFixed(2)}`;
}

function drawHistory() {

  // Dibujar el historial de la masa 1
  for (let i = 1; i < history1.length; i++) {
    const opacity = i / history1.length;
    ctx.strokeStyle = `rgba(255, 0, 0, ${opacity})`;
    ctx.beginPath();
    ctx.moveTo(history1[i-1][0], history1[i-1][1]);
    ctx.lineTo(history1[i][0], history1[i][1]);
    ctx.stroke();
  }

  // Dibujar el historial de la masa 2
  for (let i = 1; i < history2.length; i++) {
    const opacity = i / history2.length;
    ctx.strokeStyle = `rgba(0, 0, 255, ${opacity})`;
    ctx.beginPath();
    ctx.moveTo(history2[i-1][0], history2[i-1][1]);
    ctx.lineTo(history2[i][0], history2[i][1]);
    ctx.stroke();
  }
}

function draw() {
  // Limpiar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar los péndulos y las masas
  var l1 = parseFloat(document.getElementById("l1").value);
  var l2 = parseFloat(document.getElementById("l2").value);
  var m1 = parseFloat(document.getElementById("m1").value);
  var m2 = parseFloat(document.getElementById("m2").value);
  // Calcular las posiciones de los péndulos
  const centerX = canvas.width / 2;
  const centerY = 100;
  const x1 = centerX + l1 * Math.sin(theta1);
  const y1 = centerY + l1 * Math.cos(theta1);
  const x2 = x1 + l2 * Math.sin(theta2);
  const y2 = y1 + l2 * Math.cos(theta2);

  // Limpiar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar los péndulos
  ctx.strokeStyle = "black"
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(x1, y1);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke(); 

  // Dibujar una caja de adorno.
  ctx.fillStyle = "gray"; 
  ctx.fillRect(centerX, centerY, -25, -15);
  ctx.fillStyle = "gray";
  ctx.fillRect(centerX, centerY,  25, -15);
  
  // Dibujar las masas de los péndulos
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(x1, y1, m1, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(x2, y2, m2, 0, 2 * Math.PI);
  ctx.fill();
  drawHistory();
 /* 
  // Dibujar eje x
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.strokeStyle = 'black';
  ctx.stroke();

  // Dibujar eje y
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();

  const step = 50; // Distancia entre cada marca
  ctx.font = "12px Times New Roman"; // Fuente del texto
  ctx.textAlign = "center"; // Alineación horizontal del texto

  // Dibujar marcas en el eje x
  for (let i = -canvas.width / 2 + step; i < canvas.width / 2; i += step) {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 + i, canvas.height / 2 - 5);
  ctx.lineTo(canvas.width / 2 + i, canvas.height / 2 + 5);
  ctx.stroke();
  ctx.fillText(i, canvas.width / 2 + i, canvas.height / 2 + 15);
  }

  // Dibujar marcas en el eje y
  for (let i = -canvas.height / 2 + step; i < canvas.height / 2; i += step) {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 - 5, canvas.height / 2 - i);
  ctx.lineTo(canvas.width / 2 + 5, canvas.height / 2 - i);
  ctx.stroke();
  ctx.fillText(i, canvas.width / 2 - 15, canvas.height / 2 + i);
  } */

  drawHistory(); // Dibujar historial (ya no es necesario llamarlo al final)
}

function loop() {
    update();
    draw();
    animationId = requestAnimationFrame(loop);
}

