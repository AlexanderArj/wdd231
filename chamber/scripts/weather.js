
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');
const maxTemp = document.querySelector('#max');
const lowTemp = document.querySelector('#low');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

const todayTemp = document.querySelector('#today');
const tomorrowTemp = document.querySelector('#tomorrow');
const afterToTemp = document.querySelector('#after-tomorrow');

const myKey = "d92b2c8eb358cd50f53302f1cb441cd6";
const myLat = "-23.56";
const myLong = "-46.66";

const myUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

const forecastUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;


function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function displayResults(data, forecastData) {
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `Temperature: ${Math.round(data.main.temp)} &degC`;

    maxTemp.innerHTML = `Max: ${Math.round(data.main.temp_max)} &degC`;
    lowTemp.innerHTML = `Min: ${Math.round(data.main.temp_min)} &degC`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;

    sunrise.innerHTML = `Sunrise: ${formatTime(data.sys.sunrise)}`;
    sunset.innerHTML = `Sunset: ${formatTime(data.sys.sunset)}`;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute('src', iconsrc);

    function getDayName(daysToAdd) {
        const now = Date.now();

        const msToAdd = daysToAdd * 24 * 60 * 60 * 1000;
        const futureDate = new Date(now + msToAdd);

        return futureDate.toLocaleDateString('en-EN', { weekday: 'long' }); }


    if (forecastData) {

        todayTemp.innerHTML = `Today: ${Math.round(forecastData.list[0].main.temp)}`;

        const tomorrowName = getDayName(1);

        tomorrowTemp.innerHTML = `${tomorrowName}: ${Math.round(forecastData.list[4].main.temp)} &degC`;

        const afterTomorrowName = getDayName(2);
        afterToTemp.innerHTML = `${afterTomorrowName}: ${Math.round(forecastData.list[12].main.temp)} &degC`;
    }

}

async function apiFetch() {
    try {
        const [response, responseF] = await Promise.all([
            fetch(myUrl),
            fetch(forecastUrl)
        ]);

        let data = null;
        if (response.ok) {
            data = await response.json();
            console.log("Weather data:", data);
        } else {
            throw new Error(`Error: ${response.status} - ${await response.text()}`);
        }

        let dataF = null;
        if (responseF.ok) {
            dataF = await responseF.json();
            console.log("Forecast data:", dataF);
        } else {
            throw new Error(`Error: ${responseF.status} - ${await responseF.text()}`);
        }

        displayResults(data, dataF);

    } catch (error) {
        console.error(error);
    }
}

apiFetch();