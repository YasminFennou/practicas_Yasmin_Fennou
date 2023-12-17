//CREACION DE ELEMENTOS
function showClassName () {
  return "holi"
}
const mybody = document.querySelector('body')


const customclassname = "holi"

mybody.body.innerHTML = `<p class="${showClassName()}">Lao tse es un grande</p>`

mybody.body.textContent = "<p>hola</p>";

//creo un elemento tipo parrafo 
 const newparrafo = document.createElement('p');

//añadido de atributos y contenido 
 newparrafo.setAttribute('class', 'hola')
 newparrafo.textContent ="parrafo dinamico"


 //inserto el elemento en el dom 

 document.body.appendChild(newparrafo)



 //creo un fragmento de document , esto hace lo mismo que lo de arriba pero de otra forma 
//esto una vez se inserta desaparece de la memoria (wordpress utiliza esto)
 let fragment = new DocumentFragment;
 let newparrafo = document.createElement('p')

 //

 fragment.append(newparrafo);
 document.body.appendChild(fragment);//me añade despues, al final del body 
               //insertbefore : estom me lo pone justo antes de donde yo le indique para eso tengo que usar refrenceNode
               //prepend :esta me lo añade al principio del body 

