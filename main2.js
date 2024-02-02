// const appData = "946965e9c507e3c2705aed381964214d";
// const apiLink = "http://api.openweathermap.org/data/2.5/air_pollution";

// const searchBoxx = document.querySelector(".search-box input");
// const searchBtnn = document.querySelector(".search-box button");
// const latInp = document.querySelector(".coordinate .lat")
// const lonInp = document.querySelector(".coordinate .lon")
// const airQuality = document.querySelector(".air-quality");
// const airQualityStat = document.querySelector(".air-quality-status");

// const getUserLocation = () => {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(onPositionGathered)
//     }
// }

// const onPositionGathered = pos => {
//     let lat = pos.coords.latitude.toFixed(4),
//     lon = pos.coords.longitude.toFixed(4)

//     latInp.value = lat
//     lonInp.value = lon
//     getAirQuality(lat, lon)
// }
// const getAirQuality = async (lat, lon) => {
//     const rawData = await fetch(`${apiLink}?lat=${lat}&lon=${lon}&appid=${appData}`);

//     var airData = await rawData.json();

//     console.log(airData);
//     setValuesOfAir(airData)
// }

// const setValuesOfAir = airData => {
//     const aqi = airData.list[0].main.aqi
//     let airStat = "", color = ""

//     airQuality.innerText = aqi

//     switch (aqi) {
//         case 1:
//             airStat = "Good"
//             color = "rgb(19, 201, 28)"
//             break
//         case 2:
//             airStat = "Fair"
//             color = "rgb(15, 134, 25)"
//             break
//         case 3:
//             airStat = "Moderate"
//             color = "rgb(201, 204, 13)"
//             break
//         case 4:
//             airStat = "Poor"
//             color = "rgb(204, 83, 13)"
//             break
//         case 5:
//             airStat = "Very Poor"
//             color = "rgb(204, 13, 13"
//             break
//         default:
//             airStat = "Tidak Diketahui"
//     }

//     airQualityStat.innerText = airStat
//     airQualityStat.style.color = color

// }

// searchBtnn.addEventListener("click", () => {
//     let lat = parseFloat(latInp.value).toFixed(4)
//     let lon = parseFloat(lonInp.value).toFixed(4)
//     getAirQuality(lat, lon)
// })

// getUserLocation()