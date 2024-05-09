const apiKey = "7e5931f2bbbe4400a64b631106ad6795";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "/weather-app/images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "/weather-app/images/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "/weather-app/images/clouds.png";
  } else if (data.weather[0].main == "Haze") {
    weatherIcon.src = "/weather-app/images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "/weather-app/images/mist.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
console.log("value is name");
