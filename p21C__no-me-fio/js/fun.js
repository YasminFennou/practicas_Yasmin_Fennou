// 1. Captura de elementos
const startBtn = document.querySelector('.no-me-fio__start');
const subItems = document.querySelectorAll('.no-me-fio__item');
const noMeFio = document.querySelector('.no-me-fio'); // Agregué el punto al inicio para indicar que es una clase

// 2. Generación de eventos sobre la variable capturada
startBtn.addEventListener('click', moveItems);
noMeFio.addEventListener('click', changeColor);

// 3. Declaro función que va a suceder cuando hago click en el botón
function moveItems() {
    subItems.forEach(item => {
        item.classList.toggle('play');
    });
}

function changeColor() {
    // Puedes utilizar una lógica para cambiar entre colores
    // En este ejemplo, se cambia entre blanco y rosa al hacer clic
    const currentColor = getComputedStyle(noMeFio).backgroundColor;

    if (currentColor === 'black') {
        noMeFio.style.backgroundColor = 'black';
    }
     else {
        noMeFio.style.backgroundColor = 'rgb(255, 0, 208)';
    }
}
