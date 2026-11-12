const cityOptions = document.getElementById("city-options");
const getWeatherBtn = document.getElementById("get-weather-btn");
const weatherContainer = document.getElementById("weather-container");

async function getWeather (city) {
  let data;
  try {
    const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`)
    data = await res.json()
    if (!res.ok) {
      throw new Error(data.error)
    }
  }
  catch (err) {
    console.log(err);
    return undefined
  }
  return data
}

async function showWeather (city) {
  let data;
  try {
    data = await getWeather(city)
    if (data === undefined) {
      alert("Something went wrong, please try again later")
      return;
    }
  } catch (err) {
    console.log(err)
  }
  console.log(data)
  const location = data.hasOwnProperty("name") ? data.name : "N/A";
  const weatherIcon = data.weather[0].hasOwnProperty("icon") ? data.weather[0].icon : "N/A";
  const weatherMain = data.weather[0].hasOwnProperty("main") ? data.weather[0].main : "N/A";
  const iconDescription = data.weather[0].hasOwnProperty("description") ? data.weather[0].description : "N/A";
  let mainTemp = data.main.temp ?? "N/A";
  if (mainTemp !== "N/A") {
    mainTemp += " C"
  }
  let feelsTemp = data.main.feels_like ?? "N/A";
  if (feelsTemp !== "N/A") {
    feelsTemp += " C"
  }
  let humidity = data.main.humidity ?? "N/A";
  if (humidity !== "N/A") {
    humidity += "%"
  }
  let windSpeed = data.wind.speed ?? "N/A";
  if (windSpeed !== "N/A") {
    windSpeed += " m/s"
  }
  let gusts = data.wind.gust ?? "N/A";
  if (gusts !== "N/A") {
    gusts += " m/s"
  }

  weatherContainer.innerHTML = `
  <h2 id="location">${location}</h2>
  <div id="all-weather-block">
    <div class="info-block"><p id="main-temperature"><strong class="key-info">${mainTemp}</strong></p></div>
    <div class="info-block" id="weather-main-block">
      <img id="weather-icon" src="${weatherIcon}" alt="${iconDescription}">
      <p id="weather-main"><strong class="key-info">${weatherMain}</strong></p>
    </div>
    <div class="info-block">
      <p id="feels-like">Feels like: ${feelsTemp}</p>
      <p id="humidity">Humidity: ${humidity}</p>
    </div>
    <div class="info-block">
      <p id="wind">Wind: ${windSpeed}</p>
      <p id="wind-gust">Gusts: ${gusts}</p>
    </div>
  </div>
  `

}

//eventListeners

getWeatherBtn.addEventListener("click", () => {
  showWeather(cityOptions.value)
})