const dataJson = './data/members.json';

export async function getData() {
    const response = await fetch(dataJson);
    const data = await response.json();
    console.table(data.members);
    return data.members;
}
