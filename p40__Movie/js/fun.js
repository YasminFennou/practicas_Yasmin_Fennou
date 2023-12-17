const mainContainer = document.querySelector('.ranking');

//function looper - recorre el json
function looper(jsonObj){

    jsonObj.forEach((item)=>{
       
        //creamos contenedor principal
        const artistItem = document.createElement('div');
        artistItem.classList.add('ranking__artist-item');
        mainContainer.appendChild(artistItem);

        // creamos contenedor de foto y foto
        const photoContainer = document.createElement('div');
        photoContainer.classList.add('ranking__photo-container');
        artistItem.appendChild(photoContainer);

        const photo = document.createElement('img');
        photo.classList.add('ranking__photo');
        photo.src= "img/no-id.jpg";
        photoContainer.appendChild(photo);

        // Creo datos de artista
        const dataContainer = document.createElement('div');
        dataContainer.classList.add('ranking__data-container');
        artistItem.appendChild(dataContainer);

        // llamo a Itemcreator 4 veces una por cada item
        itemCreator(dataContainer, 'h2', 'Nombre: ', item.name, 'ranking__name');
        itemCreator(dataContainer, 'p', 'Nombre alternativo: ', item.alternative_name, 'ranking__alternative-name');
        itemCreator(dataContainer, 'p', 'Rating: ', item.rating, 'ranking__rating');
        itemCreator(dataContainer, 'p', 'ID: ', item.objectID, 'ranking__id');

        colorRanking(artistItem, item.rating)
    })

    function itemCreator(container, itemTag, itemLabel, itemValue, className){
        const newItem = document.createElement(itemTag);
        container.appendChild(newItem);
        const valueOfItem = itemValue ? itemValue : " no disponible";
        newItem.innerHTML = `<span class="ranking__data-item ${className}">${itemLabel}</span>${valueOfItem}`;
    }

    function colorRanking(rankingItem, rating){
        if(rating > 3000){
            rankingItem.classList.add('ranking1');
        }
        else if (rating > 2000 && rating < 3000) {
            rankingItem.classList.add('ranking2');
        }
        else if (rating > 1000 && rating < 2000) {
            rankingItem.classList.add('ranking3');
        }
        else if (rating > 500 && rating < 1000) {
            rankingItem.classList.add('ranking4');
        }
    }
}

//function initialize
function init(){
    fetch('movies.json')
    .then((response)=>{
        movies = response.json().then((data)=>{
            looper(data);
        })
    })
}

init();
