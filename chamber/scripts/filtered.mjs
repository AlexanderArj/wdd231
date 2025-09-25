import { getData } from "./data.mjs";

function filterMembers(members) {
    return members.filter(m => {
        const level = String(m.membership_level).toLowerCase();
        return level === "gold" || level === "silver";
    });
}

function getRandomThree(members) {
    let spotlights = [...members].sort(() => Math.random() - 0.5); 
    return spotlights.slice(0, 3);
}

export async function getRandomFilteredMembers() {
    const members = await getData();
    const filtered = filterMembers(members);
    return getRandomThree(filtered);
}