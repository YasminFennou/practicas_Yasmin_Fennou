    // Cambiar las imágenes aleatoriamente
    // imgElements.forEach((imgElement) => {
    //     const randomIndex = Math.floor(Math.random()* );
    //     imgElement.src = images[randomIndex];
    // });
    
    const keyL = Math.floor(Math.random()* 3);
    const keyR = Math.floor(Math.random()* 3);
    const fotoL = ('img/'+jugadores['p'+keyL].name + '.webp');
    const fotoR = ('img/'+jugadores['p'+keyR].name + '.webp');
    console.log('img/'+jugadores['p'+keyR].name + '.webp');
    console.log(jugadores['p'+keyR].force)
    const j1f = jugadores['p'+keyR].force
    const j2f = jugadores['p'+keyL].force
    imgL.src = fotoL;
    imgR.src = fotoR;

    // Realizar el combate y mostrar el resultado en la consola
    const resultadoCombate = combatir( j1f, j2f);
    console.log(resultadoCombate);

    // Actualizar la imagen con el mensaje del ganador
   
});

function combatir( p1, p2) {
    if (p1> p2) {
        return `p1 gana contra p2!`;
    } 
    else if (p2 < p1) {
        return `p2 gana contra p1`;
    } 
    else {
        return `Es un empate `;
    }
    
}