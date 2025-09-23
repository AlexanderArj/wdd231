const dataJson = './data/members.json';

export async function getMemberData() {
    const response = await fetch(dataJson);
    const data = await response.json();
    console.table(data.members);
    return data.members;
}
