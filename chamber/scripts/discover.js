import { getData } from "./getDataPlaces.mjs";
import { displayPlaces } from "./displayPlaces.mjs";

async function discover() {
    const sections = document.querySelector('#places-container');

    if (sections) {
        
        const places = await getData();
        displayPlaces(places, '#places-container');
    
    }
    else{ return;}

    }
    
discover();
