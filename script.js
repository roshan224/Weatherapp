const apiKey = "4c77e79d24b8cc73800957f2b1a9ab47";


const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const resultDiv = document.getElementById("result");
const errorText = document.getElementById("error");

searchBtn.addEventListener("click", fetchWeather);

function fetchWeather() {
  const city = cityInput.value.trim();

  if (city === "") {
    showError("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod !== 200) {
        showError("City not found.");
        return;
      }

      errorText.classList.add("hidden");
      resultDiv.classList.remove("hidden");

      const temp = data.main.temp;

      document.getElementById("cityName").innerText = data.name;
      document.getElementById("temperature").innerText = temp + "°C";
      document.getElementById("description").innerText = data.weather[0].description;

      setAnimation(temp);
    })
    .catch(() => {
      showError("Something went wrong.");
    });
}

function showError(message) {
  resultDiv.classList.add("hidden");
  errorText.classList.remove("hidden");
  errorText.innerText = message;
}

function setAnimation(temp) {
  const container = document.getElementById("animationContainer");
  container.innerHTML = "";

  if (temp >= 30) {
    container.innerHTML = `<div class="fire"></div>`;
  } else if (temp <= 10) {
    container.innerHTML = `<div class="snow"></div>`;
  } else {
    container.innerHTML = `<div class="wind"></div>`;
  }
}