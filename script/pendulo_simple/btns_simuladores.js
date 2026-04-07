var l = document.getElementById("l");
var m1 = document.getElementById("m1");
var gd = document.getElementById("gravedad");
var selectorg = document.getElementById("selectorg");
var fr = document.getElementById("friccion");
var selectorl = document.getElementById("selectorl");
var selectorm1 = document.getElementById("selectorm1");

var selectorfr = document.getElementById("selectorfr");

l.oninput = function() {
    selectorl.style.left = this.value + "%";
}

m1.oninput = function() {
    selectorm1.style.left = this.value + "%";
}

gd.oninput = function() {
    selectorg.style.left = this.value + "%";
}

fr.oninput = function() {
    selectorfr.style.left = (10*this.value) + "%";
}

// botones incrementadores y decrementadores de las longitudes

var btnmore = document.getElementById("btnmore");
var btnless = document.getElementById("btnless");

btnmore.addEventListener("click", function () {
    incrementarInputRange();
});

btnless.addEventListener("click", function () {
    decrementarInputRange();
});

function incrementarInputRange() {
    let valoractual = parseInt(l.value);
    if (valoractual < parseInt(l.max)) {
        l.value = (valoractual + 10).toString();
        selectorl.style.left = (valoractual + 10) + "%";
    };
};

function decrementarInputRange() {
    let valoractual = parseInt(l.value);
    if (valoractual > parseInt(l.min)) {
        l.value = (valoractual - 10).toString();
        selectorl.style.left = (valoractual - 10) + "%";
    };
};

// Botones incrementadores y decrementadores de las masas 1

var btnmorem = document.getElementById("btnmorem");
var btnlessm = document.getElementById("btnlessm");

btnmorem.addEventListener("click", function () {
    incrementarInputRangem();
});

btnlessm.addEventListener("click", function () {
    decrementarInputRangem();
});

function incrementarInputRangem() {
    let valoractualm = parseInt(m1.value);
    if (valoractualm < parseInt(m1.max)) {
        m1.value = (valoractualm + 10).toString();
        selectorm1.style.left = (valoractualm + 10) + "%";
    };
};

function decrementarInputRangem() {
    let valoractualm = parseInt(m1.value);
    if (valoractualm > parseInt(m1.min)) {
        m1.value = (valoractualm - 10).toString();
        selectorm1.style.left = (valoractualm - 10) + "%";
    };
};

// FUNCIONES PARA APARECER Y DESAPARECER BOTONES
// Funciones para desaparecer el boton allstart
function hidebtnstart() {
    document.getElementById('btnstart').style.display = 'none';
    document.getElementById('allrestart').style.display = 'inline-block';
};

function hideallrestart() {
    document.getElementById('btnstart').style.display = 'inline-block';
    document.getElementById('allrestart').style.display = 'none';
};

// Funciones para desaparecer el boton allstart
function hidebtnstop() {
    document.getElementById('btnstop').style.display = 'none';
    document.getElementById('restart').style.display = 'inline-block';
};

function hiderestart() {
    document.getElementById('btnstop').style.display = 'inline-block';
    document.getElementById('restart').style.display = 'none';
};

// Funciones para desaparecer el boton step de 1 frame btnstep
function btnstep() {
    document.getElementById('btnstep').style.display = 'none';
    document.getElementById('hidebtnstep').style.display = 'inline-block';
};

function hidebtnstep() {
    document.getElementById('btnstep').style.display = 'inline-block';
    document.getElementById('hidebtnstep').style.display = 'none';
};

// Funciones para desaparecer el boton de reiniciar TOTAL del timer
function hidestart() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('stop').style.display = 'inline-block';
};

function hidestop() {
    document.getElementById('start').style.display = 'inline-block';
    document.getElementById('stop').style.display = 'none';
};

// Funciones para desaparecer el boton de reiniciar del timer
function hiderestartime() {
    document.getElementById('restartime').style.display = 'none';
    document.getElementById('hidetime').style.display = 'inline-block';
};

function hidehidetime() {
    document.getElementById('restartime').style.display = 'inline-block';
    document.getElementById('hidetime').style.display = 'none';
};

// Funcion para seleccionar un planeta en funcion del range
/*const valueg = document.querySelector("#valueg")            
  const inputg = document.getElementById("gravedad")
  valueg.textContent = (inputg.value * 0.3).toFixed(2)
  inputg.addEventListener("input", (event) => {
    valueg.textContent = (event.target.value * 0.3).toFixed(2)
  })*/
/*const planetas = {
  "Luna": 1.62,
  "Tierra": 9.81,
  "Marte": 3.71,
  "Júpiter": 24.79,
};
const selecvalue = document.getElementById("slectlist");
selecvalue.addEventListener("change", seleclist);
function seleclist(event) {
   const selectedPlanet = event.value;
   if (selectedPlanet === "") {
    return;
   };
   const gravedad = planetas[selectedPlanet];
   gd.value = gravedad;
};*/


