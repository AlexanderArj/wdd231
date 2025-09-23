import { getMemberData } from "./data.mjs";

let membersCopy = [];

async function loadMembers() {
    const members = await getMemberData();
    membersCopy = [...members]; 
    return membersCopy;
}

function filterMembers(members) {
    return members.filter(m => m.membership_level === 2 || m.membership_level === 3);
}

function getRandomThree(members) {
    let shuffled = [...members].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}

export async function getRandomFilteredMembers() {
    const all = await loadMembers();
    const filtered = filterMembers(all);
    return getRandomThree(filtered);
}