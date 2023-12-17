// Declaración de variables
var variableVacia,
    level0 = document.querySelector("#level0"),
    level1 = document.querySelector("#level1"),
    poster = document.querySelector(".wally__poster"),
    wally = document.querySelector(".wally"),
    mensaje = " La posición de Wally es:",
    isProfessionalMode = true;

// Función que se ejecuta cuando no se encuentra a Wally
function posicionWally() {
    console.log("Ahí no está Wally!");
}

// Evento clic en el botón "AMATEUR" (level0)
level0.addEventListener("click", function () {
    // Añade la clase "active" al botón level0 y la quita del botón level1
    level0.classList.add("active");
    level1.classList.remove("active");

    // Aplica un filtro de saturación del 120% al póster
    poster.style.filter = "saturate(120%)";

    // Cambia el modo profesional a falso
    isProfessionalMode = false;
});

// Evento clic en el botón "PROFESIONAL" (level1)
level1.addEventListener("click", function () {
    // Añade la clase "active" al botón level1 y la quita del botón level0
    level1.classList.add("active");
    level0.classList.remove("active");

    // Aplica un filtro de saturación del 0% al póster
    poster.style.filter = "saturate(0%)";

    // Cambia el modo profesional a verdadero
    isProfessionalMode = true;
});

// Evento clic en el póster (cuando no se encuentra Wally)
poster.addEventListener("click", posicionWally);

// Evento clic en el personaje de Wally (cuando se encuentra Wally)
wally.addEventListener("click", function (e) {
    // Captura las coordenadas del clic
    var l = [e.clientX, e.clientY];

    // Mensaje de felicitación y coordenadas
    var o =
        "Enhorabuena, has encontrado a Wally!!, tus coordenadas son: " +
        l[0] +
        ", " +
        l[1];

    // Determina el código de respuesta según el modo profesional
    var s = isProfessionalMode ? 233 : 144;

    // Crea un objeto con las coordenadas, el código de respuesta y el modo profesional
    var a = { coordenadas: l, codigo_respuesta: s, modo_pro: isProfessionalMode };

    // Imprime mensajes en la consola
    console.log(o);
    console.log("Tu código de respuesta es: " + s);
    console.log(a);

    // Detiene la propagación del evento clic
    e.stopPropagation();
});
