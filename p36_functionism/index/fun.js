function crearDivs(numDivs) {
    const paso = 360 / numDivs;
    const fragmento = document.createDocumentFragment();

    for (let i = 0; i < numDivs; i++) {
        const div = document.createElement('div');
        div.className = 'rainbow-div';
        div.style.background = `hsl(${paso * i}, 100%, 50%)`;
        fragmento.appendChild(div);
    }

    document.body.appendChild(fragmento);
}

window.addEventListener('resize', function() {
    // Borra los divs existentes antes de recalcular y recrear
    document.querySelectorAll('.rainbow-div').forEach(div => div.remove());
    crearDivs(7); // Puedes ajustar la cantidad de divs según tus necesidades
});

// Inicialmente crea los divs
crearDivs(7);