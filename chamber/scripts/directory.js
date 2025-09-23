import { getMemberData } from "./data.mjs";
import { displayMembers } from "./display.mjs";
import { viewMode } from "./view.mjs";
import { getRandomFilteredMembers } from "./filtered.mjs";

async function directory() {
    const sections = document.querySelector('#sections');
    const spotlights = document.querySelector('#spotlights');

    if (sections) {
        const members = await getMemberData();
        displayMembers(members, '#sections');
        viewMode();
    } 
    else if (spotlights) {
        const randomThree = await getRandomFilteredMembers();
        displayMembers(randomThree, '#spotlights');
    }
}

directory();
