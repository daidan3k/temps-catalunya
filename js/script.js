function treureEspaisBuits() {
    // Obtén todos los elementos td
    var elementosTd = document.getElementsByTagName('td');

    // Recorre los elementos y reemplaza el texto en los td vacíos
    for (var i = 0; i < elementosTd.length; i++) {
        var td = elementosTd[i];

        // Verifica si el td está vacío (sin contenido)
        if (td.innerHTML.trim() === '') {
            // Reemplaza el texto en el td vacío
            td.innerHTML = 'Sense informació';

            // Aplica estilos al texto reemplazado
            td.style.color = 'gray';
            td.style.fontStyle = 'italic';
        }
    }
};

function generateOptions() {
    // Obtén la referencia al menú desplegable y a todos los divs
    const selectDiv = document.getElementById('selectDiv');
    const divs = document.querySelectorAll('.comarca');

    // Genera las opciones del menú desplegable dinámicamente
    divs.forEach((div, index) => {
        const option = document.createElement('option');
        if (index == 18) {
            option.selected = true;
        }
        option.value = index + 1;
        option.text = div.firstElementChild.innerText;
        selectDiv.add(option);
    });
    mostrarDivSeleccionado(divs);
}


// Función para mostrar el div seleccionado y ocultar los demás
function mostrarDivSeleccionado() {
    const selectDiv = document.getElementById('selectDiv');
    const divs = document.querySelectorAll('.comarca');
    const selectedDivIndex = selectDiv.value - 1;

    divs.forEach((div, index) => {
        if (index === selectedDivIndex) {
            div.classList.remove('hidden');
        } else {
            div.classList.add('hidden');
        }
    });
}

