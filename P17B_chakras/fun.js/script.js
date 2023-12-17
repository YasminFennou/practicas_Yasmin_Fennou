/*const sonido=new Audio("sonido/yoga.mp3")*/
/*sonido.play*/
function hacerSonido() {
  const sonido=new Audio("sonido/yoga.mp3");
  const rojo = document.querySelector('.rojo');

  rojo.addEventListener('mouseover', () => {
    sonido.play();
  });


hacerSonido();  }

  
  

/*function cambiarColor() {
    const circulo = document.querySelector('.circulo');
    const letras = document.querySelectorAll('.rectangulo');

    // Cambiar el color de fondo del círculo
    circulo.style.backgroundColor = document.body.style.backgroundColor;

    // Ocultar las letras
    letras.forEach(letra => {
      letra.classList.add('ocultar-letters');
    });
     } */

   /*  <button class="reproductor">Reproduce audio</button>
 <audio src="sonido/yoga.mp3"></audio>
 <script>
     let boton = document.querySelector(".reproductor");
     let sonido = document.querySelector("audio");
 
     boton.addEventListener("click", () => {
         sonido.setAttribute("src", "sonido/yoga.mp3");
         sonido.play();
         console.log(`Reproduciendo: ${sonido.src}`);
     });
 </script>

