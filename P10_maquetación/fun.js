
  function cambiarColor() {
    const circulo = document.querySelector('.circulo');
    const letras = document.querySelectorAll('.rectangulo');

    // Cambiar el color de fondo del círculo
    circulo.style.backgroundColor = document.body.style.backgroundColor;

    // Ocultar las letras
    letras.forEach(letra => {
      letra.classList.add('ocultar-letters');
    });
   }

