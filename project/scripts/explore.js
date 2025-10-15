import { getData } from "./getDataPlaces.mjs";
import { displayPlaces } from "./displayPlaces.mjs";

async function explore() {
    const sections = document.querySelector('#places-container');
    if (!sections) return;

    const places = await getData();

    // Mostrar todos los lugares al cargar la página

    // Función auxiliar para filtrar y mostrar
    function filterAndDisplay(typeCode) {
        sections.innerHTML = ''; // Limpia el contenedor antes de mostrar nuevos resultados
        const filtered = places.filter(place => place.type === typeCode);
        displayPlaces(filtered, '#places-container');
    }

    // Añadir event listeners a cada enlace del menú
    document.querySelector('#parks').addEventListener('click', (e) => {
        e.preventDefault();
        filterAndDisplay('P');
    });

    document.querySelector('#restaurants').addEventListener('click', (e) => {
        e.preventDefault();
        filterAndDisplay('R');
    });

    document.querySelector('#shopings').addEventListener('click', (e) => {
        e.preventDefault();
        filterAndDisplay('S');
    });

    document.querySelector('#museums').addEventListener('click', (e) => {
        e.preventDefault();
        filterAndDisplay('M');
    });
}

explore();
