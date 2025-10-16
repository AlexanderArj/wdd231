const dataJson = './data/places.json';

export async function getData() {
    const response = await fetch(dataJson);
    const data = await response.json();
    console.log(data);
    return data.places;
}
