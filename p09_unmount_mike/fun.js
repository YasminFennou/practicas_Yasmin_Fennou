const slider = document.getElementById('deslizador');
const stElements = Array.from({ length: 15 }, (_, index) => document.getElementById(`st${index}`));
let numeroAleatorio = Array.from({ length: 15 });

function desmontarMike() {
    if (!numeroAleatorio.every(num => num !== undefined)) {
        numeroAleatorio = numeroAleatorio.map((_, index) => (Math.random() * 6 - 3).toFixed(2));
    }

    stElements.forEach((st, index) => {
        const valorXY = numeroAleatorio[index] * parseInt(slider.value);
        const cx = [340, 340, 95.5, 95.5, 217.8, 180.7, 180.7, 255.2, 255.2][index] + (numeroAleatorio[index] * parseInt(slider.value));
        const cy = [182.4, 180.4, 182.4, 180.4, 171.5, 154.5, 154.5, 154.5, 154.5][index] + (numeroAleatorio[index] * parseInt(slider.value));

        st.setAttribute('cx', cx);
        st.setAttribute('cy', cy);
        st.setAttribute('transform', `rotate(${valorXY}, ${valorXY}, ${valorXY})`);
    });
}
