

const personajes = {
    p0: {
        name: 'goku',
        force: 1
    },
    p1: {
        name: 'vejeta',
        force: 2
    },
    p2: {
        name: 'picollo',
        force: 3
    },
};

const btnFight = document.querySelector('.btn-fight');
const photoContainerLeft = document.querySelector('.game__fighter-left-in');
const photoContainerRight = document.querySelector('.game__fighter-right-in');



btnFight.addEventListener('click', fight);

function fight(){
 
  // img izquierda
    const keyLeft = Math.floor(Math.random()*3);//genero un numero aleatorio entre 0 y 2
    const photoLeft = document.createElement('img');//creo una img
    photoLeft.src = 'img/' + personajes['p'+keyLeft].name + '.webp';//asigno una url a la img 
    photoContainerLeft.innerHTML = "";//vaciado del div 
    photoContainerLeft.appendChild(photoLeft);//añado la img al DOM 


     const forceLeft = personajes['p'+ keyLeft].force//capturo el valor force

    //img derecha 
    const keyRight = Math.floor(Math.random()*3);//genero un numero aleatorio entre 0 y 2 
    const photoRight = document.createElement('img');//creo una img
    photoRight.src = 'img/' + personajes['p'+keyRight].name + '.webp';//asigno una url a la img
    photoContainerRight.innerHTML = "";//vaciado del div
    photoContainerRight.appendChild(photoRight);//añado la img al DOM 


    const forceRight = personajes['p'+ keyRight].force//capturo el valor force

    showWinner(forceLeft, forceRight);
}

/*funcion que muestra el ganador del juego */

function showWinner(forceLeft, forceRight){
    //Esto es para borrar las clases antes de ponerla en cada click 
    photoContainerLeft.parentNode.classList.remove('winner', 'draw');
    photoContainerRight.parentNode.classList.remove('winner', 'draw');
   

   //Esto es para crear una clase cada vez que sale el resultado 
    if(forceLeft > forceRight ) {
        setTimeout(() => {
            //delay a o milisegundos 
            photoContainerLeft.parentNode.classList.add('winner');
        }, 0);
       
     }
     else if(forceLeft < forceRight ) {
        setTimeout(() => {
              //delay a o milisegundos
            photoContainerRight.parentNode.classList.add('winner');
        }, 0);
     }
     else {
        setTimeout(() => {
              //delay a o milisegundos
            photoContainerLeft.parentNode.classList.add('draw');
            photoContainerRight.parentNode.classList.add('draw');
        }, 0);
     }
} 