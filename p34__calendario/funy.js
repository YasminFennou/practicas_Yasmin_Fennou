 //1
 for(let contador =0; contador <10; contador ++){
    
    let color ="#00" + contador;
    if(contador==2) color= "#F00";
    
    document.body.innerHTML += "<p style='border: 1px solid black; background-color: " + color +"; color: #FFF; padding: 20px;'> Parrafo generado con JS </p>" 
}

//2 esto hace 100 botones de 100 a 1 y he creado un boton con js 
for(let i=100;  i>0; i-- ){
    //creo el elemento
  const  buttonElement = document.createElement('button');
 //le creo el contenido
  buttonElement.innerHTML = i;

  //le añado el evento
  buttonElement.addEventListener('click', function(){
    console.log(i);
  })

//Lo inserto en el DOM
  document.body.appendChild(buttonElement);


}

//4 crea un array con los meses de año

const meses = ["enero", "febrero", "marzo","abril", "mayo", "junio", "julio","agosto", "septiembre", "octubre", "noviembre", "diciembre"]


//FOR esto es para cuando estoy haciendo bucles con otro origen..quiero hacer bucles agnosticos a un array 
for(let i=0; i < meses.lenght; i++){
    if(meses[i] == "febrero") continue;
    console.log('xxxxxxxxxxx', meses[i]);
}



console.log("------------------------");
//FOREACH esto es para recorrer un array y es la mejor forma de trabajar 
meses.forEach((element) =>{
    if(element == "febrero") {return;}
    console.log('----------', element);
    
})

console.log("------------------------");

//FOR OF
 for(let item of meses) {
    console.log(item);
 }
