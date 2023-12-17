const btnFlechas = document.querySelector('.btnFlechas');
const fotoVoldemort = document.querySelector('#voldemort');


btnFlechas.addEventListener('click', cambiarFoto);


let  imageCounter = 1;
function cambiarFoto(){
     imageCounter=  imageCounter+1;

    if( imageCounter==4){ imageCounter=1}
    fotoVoldemort.src="img_voldemort/" + imageCounter +".jpg";
   
}