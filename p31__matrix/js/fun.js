/*COMENTARIOS*/
//Variables y constantes siempre antes de funciones 

/* */ 


//1.Capturo el selector foto 
//2.Defino array 

// 3.Event listener -> click 
// Extraigo value o id de cada etiqueta option 
//Cambio url de la foto en base al array cuya posicion es el value 
//1.Primera forma de hacrelo cuando lo que tengo es un data-url en el html (el html correspondente esta en comentarios en el hmtl)
//const photosUrls = ["morpheo.webp", "neo.jpg", "trinity.jpeg"];
//const selectorPhotos = document.querySelector('.matrix');
//const fotoSlot = document.querySelector('.fotoSlot');

//selectorPhotos.addEventListener('input', function() {

  //const route = selectorPhotos.options[this.selectedIndex].dataset.url;
  //console.log(route);
  //fotoSlot.style.backgroundImage = `url("img/${route}")`;});


  const photosUrls = {
    neo: "neo.jpg",
    trinity : "trinity.jpeg",
    morpheo :"morpheo.webp"
  }
//photosUrls.neo;
//photosUrls["neo"];




  const selectorPhotos = document.querySelector('.matrix');
  const fotoSlot = document.querySelector('.fotoSlot');
  selectorPhotos.addEventListener('input', function() {
//console.log(selectorPhotos.value);
//photosUrls[selectorPhotos.value] // photosUrls["neo"]
fotoSlot.style.backgroundImage = `url("img/${photosUrls[selectorPhotos.value]}")`;
  });

  

