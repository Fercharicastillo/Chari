const g4 = 9.81; // Aceleración debido a la gravedad en m/s^2
const timeStep4 = 0.1; // Paso de tiempo en segundos
let t4 = 0; // Tiempo en segundos

let scale4 = 5;

// Variable para almacenar la IdS de la animcacion
var animationIdtwo; // Animacion del pendulo azul

// PENDULO SIMPLE DE COLOR AZUL
let theta2 = - Math.PI / 4; // Ángulo inicial del péndulo azul
let omega2 = 0; // Velocidad angular inicial del péndulo azul
const historytwo = []; // History del pendulo azul

function updatetwo() {
  // Extrae la longitud del péndulo ingresado en el HTML
  var l2 = parseFloat(document.getElementById("l").value); 
  // Vota el valor l seleccionado del rango
  const value2 = document.querySelector("#valuel")            
  const input2 = document.querySelector("#l")
  value2.textContent = input2.value
  input2.addEventListener("input", (event) => {
    value2.textContent = event.target.value
  })
  // Vota el valor m1 seleccionado del rango
  const valuem2 = document.querySelector("#valuem1")            
  const inputm2 = document.querySelector("#m1")
  valuem2.textContent = inputm2.value
  inputm2.addEventListener("input", (event) => {
    valuem2.textContent = event.target.value
  })
  // Calcular la aceleración angular
  const alpha2 = (-g4 / l2) * Math.sin(theta2);
  // Actualizar la velocidad angular
  omega2 += alpha2 * timeStep4;
  // Actualizar el ángulo
  theta2 += omega2 * timeStep4;
  // Calcular la nueva posición de la masa
  const centerX2 = canvas.width / 2;
  const centerY2 = 50; // Posición vertical fija para el péndulo simple
  const x2 = centerX2 + l2 * scale4 * Math.sin(theta2); // Componente en x de m1
  const y2 = centerY2 + l2 * scale4 * Math.cos(theta2); // Componente en y de m1
  historytwo.push([x2, y2]);
}

function drawHistorytwo() {
  // Dibujar el historial del péndulo
  for (let i = 1; i < historytwo.length; i++) {
    const opacity = i / historytwo.length; // Defino la opacidad en funcion de el history
    ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`; // Defino el color de la linea con rgba(,) y su opacidad
    ctx.beginPath(); // Comienzo un nuevo trazo
    ctx.moveTo(historytwo[i-1][0], historytwo[i-1][1]); // Muevo el trazo a otra posicion. Posicion inicial
    ctx.lineTo(historytwo[i][0], historytwo[i][1]); // Muevo el trazo a una posicion final. Dibujo el trazo
    ctx.stroke(); // Dibujo la linea
  }
}

function drawtwo() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Dibujar el péndulo
  var l2 = parseFloat(document.getElementById("l").value); // Saca el numero de la variable l
  var m2 = parseFloat(document.getElementById("m1").value); // Saca el numero de la variable m1
  const centerX2 = canvas.width / 2;
  const centerY2 = 50; // Posición vertical fija para el péndulo simple
  const x2 = centerX2 + l2 * scale4 * Math.sin(theta2);
  const y2 = centerY2 + l2 * scale4 * Math.cos(theta2);
  // Dibujar el péndulo
  ctx.beginPath();
  ctx.moveTo(centerX2, centerY2);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  // Dibujar una caja de adorno.
  ctx.fillStyle = "gray"; 
  ctx.fillRect(centerX2, centerY2, -25, -15);
  ctx.fillStyle = "gray";
  ctx.fillRect(centerX2, centerY2,  25, -15);
  // Rastro del pendulo
  drawHistorytwo();
  // Dibujar la masa del péndulo
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(x2, y2, m2, 0, 2 * Math.PI);
  ctx.fill();
}

function looptwo() {
  drawtwo();
  updatetwo();
  animationIdtwo = requestAnimationFrame(looptwo);
}

function stoplooptwo() {
  cancelAnimationFrame(animationIdtwo);
}

function restarttwoloop() {
  theta2 = -Math.PI / 2;
  omega2 = 0;
  t4 = 0;
  historytwo.length = 0; // Limpiar el historial de posiciones
  // Llamar a la función de dibujo para reiniciar la pantalla
  drawtwo();
  stoplooptwo();
}

const g3 = 9.81; // Aceleración debido a la gravedad en m/s^2
const timeStep3 = 0.1; // Paso de tiempo en segundos
let t3 = 0; // Tiempo en segundos

// Variable para almacenar la IdS de la animcacion
var animationIdthree; // Animacion del pendulo cyan

// PENDULO SIMPLE DE COLOR CYAN
let scale3 = 5;
let theta3 = Math.PI / 4; // Ángulo inicial del péndulo azul
let omega3 = 0; // Velocidad angular inicial del péndulo azul
const historythree = []; // History del pendulo azul

function updatethree() {
  // Extrae la longitud del péndulo ingresado en el HTML
  var l3 = parseFloat(document.getElementById("l").value); 
  // Vota el valor l seleccionado del rango
  const value3 = document.querySelector("#valuel")            
  const input3 = document.querySelector("#l")
  value3.textContent = input3.value
  input3.addEventListener("input", (event) => {
    value3.textContent = event.target.value
  })
  // Vota el valor m1 seleccionado del rango
  const valuem3 = document.querySelector("#valuem1")            
  const inputm3 = document.querySelector("#m1")
  valuem3.textContent = inputm3.value
  inputm3.addEventListener("input", (event) => {
    valuem3.textContent = event.target.value
  })
  // Calcular la aceleración angular
  const alpha3 = (-g3 / l3) * (theta3);
  // Actualizar la velocidad angular
  omega3 += alpha3 * timeStep3;
  // Actualizar el ángulo
  theta3 += omega3 * timeStep3;
  // Calcular la nueva posición de la masa
  const centerX3 = canvas.width / 2;
  const centerY3 = 50; // Posición vertical fija para el péndulo simple
  const x3 = centerX3 + l3 * scale3 * Math.sin(theta3); // Componente en x de m1
  const y3 = centerY3 + l3 * scale3 * Math.cos(theta3); // Componente en y de m1
  historythree.push([x3, y3]);
}

function drawHistorythree() {
  // Dibujar el historial del péndulo
  for (let i = 1; i < historythree.length; i++) {
    ctx.lineWidth = 1;
    const opacity = i / historythree.length; // Defino la opacidad en funcion de el history
    ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`; // Defino el color de la linea con rgba(,) y su opacidad
    ctx.beginPath(); // Comienzo un nuevo trazo
    ctx.moveTo(historythree[i-1][0], historythree[i-1][1]); // Muevo el trazo a otra posicion. Posicion inicial
    ctx.lineTo(historythree[i][0], historythree[i][1]); // Muevo el trazo a una posicion final. Dibujo el trazo
    ctx.stroke(); // Dibujo la linea
  }
}

function drawthree() {
  // Dibujar el péndulo
  ctx.lineWidth = 1;
  var l3 = parseFloat(document.getElementById("l").value); // Saca el numero de la variable l
  var m3 = parseFloat(document.getElementById("m1").value); // Saca el numero de la variable m1
  const centerX3 = canvas.width / 2;
  const centerY3 = 50; // Posición vertical fija para el péndulo simple
  const x3 = centerX3 + l3 * scale3 * Math.sin(theta3);
  const y3 = centerY3 + l3 * scale3 * Math.cos(theta3);
  // Dibujar el péndulo
  ctx.beginPath();
  ctx.moveTo(centerX3, centerY3);
  ctx.lineTo(x3, y3);
  ctx.stroke();
  // Dibujar una caja de adorno.
  ctx.fillStyle = "gray"; 
  ctx.fillRect(centerX3, centerY3, -25, -15);
  ctx.fillStyle = "gray";
  ctx.fillRect(centerX3, centerY3,  25, -15);
  // Rastro del pendulo
  drawHistorythree();
  // Dibujar la masa del péndulo
  ctx.fillStyle = "cyan";
  ctx.beginPath();
  ctx.arc(x3, y3, m3, 0, 2 * Math.PI);
  ctx.fill();
}

function loopthree() {
  drawthree();
  updatethree();
  animationIdthree = requestAnimationFrame(loopthree);
}

function stoploopthree() {
  cancelAnimationFrame(animationIdthree);
}

function restartthreeloop() {
  theta3 = -Math.PI / 2;
  omega3 = 0;
  t3 = 0;
  historythree.length = 0; // Limpiar el historial de posiciones
  // Llamar a la función de dibujo para reiniciar la pantalla
  drawthree();
  stoploopthree();
}

drawtwo();
drawthree();
