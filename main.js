const apiKey = "cdf2510834334c7ac91c191b2ba4d37a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather");


async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status == 404){
    window.alert("Kota Tidak Ditemukan!");
  }

  var data = await response.json();

  document.querySelector(".city").innerText = `${data.name}, ${data.sys.country}`;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + ("°c");
  document.querySelector(".hi").innerHTML = Math.round(data.main.temp_max);
  document.querySelector(".low").innerHTML = Math.round(data.main.temp_min);

  let now = new Date();
  let date = document.querySelector(".date");
  date.innerText = dateBuilder(now);

  if(data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }

  document.querySelector(".main").style.display = "block";
}

function dateBuilder (d) {
  let months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli",
  "Agustus", "September", "Oktober", "November", "Desember"];
  let days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})

searchBox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    checkWeather(searchBox.value);
  }
}