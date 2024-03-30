const weatherIcon = document.querySelector('#weather-icon');
const weatherTemp = document.querySelector('#weather-temp');
const weatherDesc = document.querySelector('#weather-desc');

const myKey = "0cc449e0243f819a913286fc912877ac";
const myLat = "42.70";
const myLon = "23.32";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&units=imperial&appid=${myKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
  weatherIcon.setAttribute('alt', `${data.weather[0].description}`);
  weatherTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;F`;
  weatherDesc.innerHTML = `${data.weather[0].description}`;
}

apiFetch()
