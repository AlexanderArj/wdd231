import { getData } from "./getDataPlaces.mjs";
import { displayPlaces } from "./displayPlaces.mjs";

async function explore() {
    const sections = document.querySelector('#places-container');
    if (!sections) return;

    const places = await getData();

    function filterAndDisplay(typeCode) {
        sections.innerHTML = ''; 
        const filtered = places.filter(place => place.type === typeCode);
        displayPlaces(filtered, '#places-container');
    }

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
