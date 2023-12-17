//capturo elemntos del DOM
const btn1 = document.querySelector('.btn1');
const capturedObj = document.querySelector('div');
const imgCapt = document.querySelector('div img');
const inputText = document.querySelector('input')
console.log()

//defino funciones 
function divChanger(obj){
    obj.classList.add('padd-40');
    obj.classList.add('bg-red');
    obj.classList.add('border-2');




}
//lanzo evento y dentro invoco la funcion con un add event listener 

btn1.addEventListener('click', function(){
    divChanger(capturedObj);
    imgCapt.setAttribute('title', 'title cambiado por JS');//esto es para cambiar el title 
    const altvalue = imgCapt.getAttribute('alt')
    imgCapt.setAttribute('src','https://www.pexels.com/es-es/foto/ciudad-hombre-mujer-en-pie-18156056/');//esto es para poner atributos
    imgCapt.src = 'https://www.pexels.com/es-es/foto/ciudad-hombre-mujer-en-pie-18156056/'

    console.log(inputText.getAttribute('value'));
    console.log(inputText.value);
})


//creacion de elementos 
























 


