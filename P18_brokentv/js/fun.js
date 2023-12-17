// Algoritmo hacer que cuando el botón 1 sea pulsado cambie al foto
const images = [
  "img/miedo.webp",
  "img/mejores-peliculas-historia-1631719298.jpg",
  "img/Rush.jpg",
  "img/peliculaup.webp",
  "img/peliculas-de-halloween-el-retorno-de-las-brujas.webp",
  "img/mejores-peliculas-disney.webp",
  "img/meangirls.jpg",
  "img/baby-driver.jpg",
];

// Capturar todos los elementos que van a participar en mi programa
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const tvImg = document.querySelector('#tvImg');
const tvBtnOnOff = document.getElementById('tvBtnOnOff');

// Apagar la pantalla de la TV
function ocultarImg() {
  document.getElementById('tvImg').style.visibility = 'hidden';
}

// Aplicar el evento al elemento que yo quiero o que me diga la tarea
btn1.addEventListener('click', cambiarCanal);
btn2.addEventListener('click', cambiarCanal);
btn3.addEventListener('click', cambiarCanal);
btn4.addEventListener('click', cambiarCanal);
btn5.addEventListener('click', cambiarCanal);
btn6.addEventListener('click', cambiarCanal);
btn7.addEventListener('click', cambiarCanal);
btn8.addEventListener('click', cambiarCanal);

// Aplicar evento al botón de encendido/apagado
tvBtnOnOff.addEventListener('click', toggleEncendido);

// Función para cambiar el estado de la televisión
function toggleEncendido() {
  if (tvImg.style.visibility === 'hidden') {
      // Si la televisión está apagada, encenderla
      tvImg.style.visibility = 'visible';
  } else {
      // Si la televisión está encendida, apagarla
      tvImg.style.visibility = 'hidden';
  }
}

// Definir la función que va a ejecutar el evento (esto es casi igual siempre)
function cambiarCanal() {
  tvImg.src = images[this.dataset.number];
}
