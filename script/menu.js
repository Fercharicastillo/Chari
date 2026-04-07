//Es Js es del menu depegable
let click_btn = document.getElementById('btn_menu');
const btnmenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
let main = document.querySelector('.main');

click_btn.addEventListener('click', e=>{
  btnmenu.classList.toggle('selected-btn-menu')
	menu.classList.toggle('menu_ds');
	main.classList.toggle('main_ds');
});

// CREAR FECHA
const containerfecha = document.querySelector('.footer-right');

function applydate() {
  const emdate = document.createElement('em'); 
  emdate.textContent = 'Ultima actualización: 2024-03-23';
  containerfecha.appendChild(emdate); 
}

applydate();

//MENU BTN-DARKMODE

const click_dm = document.getElementById('click-DarkMode');
const btn_darkmode = document.querySelector('.darmode-btn-content');

const applyDarkMode = () => {
  const isDarkMode = click_dm.checked;
  btn_darkmode.classList.add('transition');
  setTimeout (() => {
    btn_darkmode.classList.toggle('btn-cambio-after-dM', isDarkMode);
    document.documentElement.setAttribute('cambio', isDarkMode ? 'darkMode' : null);
    sessionStorage.setItem('darkMode', isDarkMode);
    setTimeout(() => {
      btn_darkmode.classList.remove('transition');
    }, 10)
  }, 100);
};

click_dm.addEventListener('click', applyDarkMode);


// Aplicar el modo oscuro al cargar la página
const isDarkMode = sessionStorage.getItem('darkMode') === 'true';
click_dm.checked = isDarkMode;
applyDarkMode();


menu.addEventListener("mouseenter", () => {
  menu.classList.add("overflow-visible");
});

menu.addEventListener("mouseleave", () => {
  menu.classList.remove("overflow-visible");
});




