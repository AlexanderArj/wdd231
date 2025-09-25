const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');
const maxTemp = document.querySelector('#max');
const lowTemp = document.querySelector('#low');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

// -23.56, -46.66

const myKey = "d92b2c8eb358cd50f53302f1cb441cd6";
const myLat = "-23.56";
const myLong = "-46.66";

const myUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

async function apiFetch() {
    try {
        const response = await fetch(myUrl);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only, para probar que la informacion se muestra correctamente desde el json. Lo 
            // lo puedes ver en console al ispeccionar. Preferiblemente tratar de hacerlo en incognito y utilizar el codigo basico html y js necesario sin nada mas
            console.log(data);
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function formatTime(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function displayResults (data){
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `Temperature: ${data.main.temp} &degC`;

    maxTemp.innerHTML = `Max: ${data.main.temp_max} &degC`;
    lowTemp.innerHTML = `Min: ${data.main.temp_min} &degC`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;

    sunrise.innerHTML = `Sunrise: ${formatTime(data.sys.sunrise)}`;
    sunset.innerHTML = `Sunset: ${formatTime(data.sys.sunset)}`;


    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute('src', iconsrc);
    myGraphic.setAttribute('alt', data.weather[0].description);
    
}

apiFetch();