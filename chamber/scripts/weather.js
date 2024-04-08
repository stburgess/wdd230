const weatherIcon = document.querySelector('#weather-icon');
const weatherTemp = document.querySelector('#weather-temp');
const weatherDesc = document.querySelector('#weather-desc');

const weatherTemp1 = document.querySelector('#weather-temp1');
const weatherDate1 = document.querySelector('#weather-date1');
const weatherTemp2 = document.querySelector('#weather-temp2');
const weatherDate2 = document.querySelector('#weather-date2');
const weatherTemp3 = document.querySelector('#weather-temp3');
const weatherDate3 = document.querySelector('#weather-date3');

const myKey = "0cc449e0243f819a913286fc912877ac";
//Vancouver coordinates
const myLat = "49.28";
const myLon = "-123.12";
//current weather
const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&units=metric&appid=${myKey}`;
//forecast
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&units=metric&cnt=30&APPID=${myKey}`;

async function apiFetch() {
  try {
    const response = await fetch(urlWeather);
    if (response.ok) {
      const weatherData = await response.json();
      displayWeather(weatherData);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
  try {
    const response = await fetch(urlForecast);
    if (response.ok) {
      const forecastData = await response.json();
      displayForecast(forecastData);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayWeather(data) {
  weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
  weatherIcon.setAttribute('alt', `${data.weather[0].description}`);
  weatherTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`;
  weatherDesc.innerHTML = `${data.weather[0].description}`;
}

//provides results at 12:00
function displayForecast(data) {
  let forecastNum = 0;
  for (let i = 0; i < 25; i++) {
    if (data.list[i].dt_txt.split(" ")[1] === "12:00:00") {
      switch (forecastNum) {
        case 0:
          weatherTemp1.innerHTML = `${data.list[i].main.temp.toFixed(1)}&deg;C`;
          weatherDate1.innerHTML = `${Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(new Date(data.list[i].dt_txt.substring(0, 10)))}`;
          break;
        case 1:
          weatherTemp2.innerHTML = `${data.list[i].main.temp.toFixed(1)}&deg;C`;
          weatherDate2.innerHTML = `${Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(new Date(data.list[i].dt_txt.substring(0, 10)))}`;
          break;
        case 2:
          weatherTemp3.innerHTML = `${data.list[i].main.temp.toFixed(1)}&deg;C`;
          weatherDate3.innerHTML = `${Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(new Date(data.list[i].dt_txt.substring(0, 10)))}`;
          break;
      }
      forecastNum++;
      if (forecastNum > 2) {
        break;
      }
    }
  }
};

apiFetch()
