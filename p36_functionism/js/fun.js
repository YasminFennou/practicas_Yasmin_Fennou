// Crea una función que pinte una circunferencia en el centro de la pantalla del diámetro especificado por parámetro de la misma (en px).


function drawCircle(diameter){

 return document.body.innerHTML += `<div style="height: 
 ${diameter}px; width: ${diameter}px; background:red; border-radius:50%"></div>`;

}

 for(let index = 0; index < 2; index++){
    drawCircle(2*index);
 }

 //Crea una función que cuando el usuario haga click en un botón simule el lanzamiento de una moneda al aire y devuelva cara o cruz en un div al lado del botón. Cuando el usuario haya hecho 3 lanzamientos, que la función se inactive y en el div se muestre " No tientes a tu suerte, amigo".

const button = document.querySelector('button');
const result = document.querySelector('.result');

button.addEventListener('click', lanzarmoneda )

var contador = 0;  
function lanzarmoneda(){
    contador = contador +1;

    if(contador > 3){return result.innerHTML = "No tientes a tu suerte"};

   return result.innerHTML = (Math.floor(Math.random()*2)%2) == "0" ? "cara" : "cruz"

  
}

//Crea una función que dado un elemento DOM permita: 
//- borrarlo
//- copiarlo debajo
//- insertar un texto dentro del elemento


const buttons = document.querySelector('.buttons');


//creo event listener sobre el contenedor de botones 

buttons.addEventListener('click', function(e){
   const domItem = document.querySelector('.domt-item');

   clickOnelements(domItem, e.target.value);
})

function clickOnelements(domElement,action) {
    
    if(action == "delete"){
    domElement.remove();
       //borrar obj 
    } 
    else if (action=="copy"){
    document.body.appendChild(domElement.cloneNode(true));
     //clonar obj 
    }
   else if (action== "insert"){
   domElement.innerHTML = "texto generado por JS";
    //insertar texto dentro del obj
   }
   else {
    console.log("No existe esta accion")
   }
}


