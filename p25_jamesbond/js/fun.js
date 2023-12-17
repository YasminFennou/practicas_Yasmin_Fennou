document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.querySelector('.startButton'); // Cambiado el selector a '.startButton'
    const circle = document.getElementById('circle'); // Cambiado el selector a '#circle'

    if (startButton && circle) {  
        startButton.addEventListener('click', function () {
            // Agrega la clase para activar la animación
            circle.classList.toggle('expanded');
        });
    }
});