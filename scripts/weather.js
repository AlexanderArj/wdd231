const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

const myKey = "d92b2c8eb358cd50f53302f1cb441cd6";
const myLat = "49.76";
const myLong = "6.64";

const myUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}`;

async function apiFetch() {
    try {
        const response = await fetch(myUrl);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only, para probar que la informacion se muestra correctamente desde el json. Lo 
            // lo puedes ver en console al ispeccionar. Preferiblemente tratar de hacerlo en incognito y utilizar el codigo basico html y js necesario sin nada mas
            
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayResults (data){
    console.log('hello');
    myTown.innerHTML = data.name;
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `${data.main.temp} &degF`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute('src', iconsrc);
    myGraphic.setAttribute('alt', data.weather[0].description);
    
}

apiFetch();