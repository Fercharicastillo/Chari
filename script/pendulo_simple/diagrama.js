const timeStep2 = 0.1; // Paso de tiempo en segundos
let t2 = 0; // Tiempo en segundos

// Variable para almacenar la IdS de la animcacion
var animationId1; // Animacion del diagrama

// SIMULADOR DEL DIAGRAMA POSICION VS TIEMPO
let theta1 = -Math.PI / 2; // Ángulo inicial para el diagrama
let omega1 = 0; // Velocidad angular inicial para el diagrama
const historyplot = []; // History del diagrama

function updateplot() {
  var l = parseFloat(document.getElementById("l").value); 
  var g1 = parseFloat(document.getElementById("gravedad").value);
  var b1 = parseFloat(document.getElementById("friccion").value);

  const alpha1 = - (b1 / (m1 * l ^ 2)) * omega1 - (g1 / l) * Math.sin(theta1);
  omega1 += alpha1 * timeStep2;// Actualizar la velocidad angular
  theta1 += omega1 * timeStep2;// Actualizar el ángulo
  t2 += timeStep2;// Actualizar el tiempo
  historyplot.push([t2, omega1]); // Guardar posiciones
}

function drawHistoryplot() {
  const ejex = [];
  const ejey = [];
  
  // Llenar los arrays ejex y ejey
  for (let i = 0; i < historyplot.length; i++) {
    ejex.push(historyplot[i][0]);
    ejey.push(historyplot[i][1]);
  }

  // Calcular los máximos y mínimos de ejex y ejey
  const maxValuex = Math.max(...ejex);
  const minValuey = Math.min(...ejey);
  const maxValuey = Math.max(...ejey);

  // Dibujar el historial del péndulo
  for (let i = 1; i < historyplot.length; i++) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo((canvas.width / 20) + historyplot[i - 1][0] * (canvas.width / maxValuex), historyplot[i - 1][1] * (canvas.height / (maxValuey - minValuey)) + (canvas.height / 2));
    ctx.lineTo((canvas.width / 20) + historyplot[i][0] * (canvas.width / maxValuex), historyplot[i][1] * (canvas.height / (maxValuey - minValuey)) + (canvas.height / 2));
    ctx.stroke();
  }
}

function drawplot() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 1;
  // Graficar eje horizontal
  ctx.fillStyle = "black";
  ctx.beginPath ();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.strokeStyle = 'black';
  ctx.stroke();
  // Graficar eje vertical
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.moveTo(canvas.width / 20, 0 );
  ctx.lineTo(canvas.width / 20, canvas.height);
  ctx.strokeStyle = 'black';
  ctx.stroke();

  const step = 50; // Distancia entre cada marca
  ctx.font = "12px Times New Roman"; // Fuente del texto
  ctx.textAlign = "center"; // Alineación horizontal del texto

  // Dibujar marcas en el eje x
  for (let i = -50; i < canvas.width; i += step) {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 20 + i, canvas.height / 2 - 5);
  ctx.lineTo(canvas.width / 20 + i, canvas.height / 2 + 5);
  ctx.stroke();
  ctx.fillText((i/50)*.25, canvas.width / 20 + i, canvas.height / 2 + 20);
  }
  // Dibujar marcas en el eje y
  for (let i = -canvas.height / 2 + step; i < canvas.height / 2; i += step) {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 20 - 5, canvas.height / 2 - i);
  ctx.lineTo(canvas.width / 20 + 5, canvas.height / 2 - i);
  ctx.stroke();
  ctx.fillText(-(i/50)*.25, canvas.width / 20 - 20, canvas.height / 2 + i);
  }
  drawHistoryplot();
}

function loopplot() {
  updateplot();
  drawplot();
  animationId1 = requestAnimationFrame(loopplot);
};

function stoploopplot() {
  cancelAnimationFrame(animationId1);
}

function restartloopplot() {
  theta1 = -Math.PI / 2;
  omega1 = 0;
  t2 = 0;
  history.length = 0; // Limpiar el historial de posiciones
  // Llamar a la función de dibujo para reiniciar la pantalla
  drawplot();
  stoploopplot();
}

drawplot();