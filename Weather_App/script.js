
let data;
const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

const getData = async (event) => {
  event.preventDefault();
  if (!inputBox.value) {
    alert("Please Enter the City name:");
    return;
  }
  const city = inputBox.value;
  const fetchData = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=837b2ac953634a7f89655059231905&q=${city}`
  )


  const data = await fetchData.json();
  console.log(data);
  countryName.innerHTML = data.location.country;
  stateName.innerHTML = data.location.region;
  cityName.innerHTML = data.location.name;
  humidity.innerHTML = data.current.humidity;
  windSpeed.innerHTML = data.current.wind_kph;
  temprature.innerHTML = data.current.temp_c;
  logoImage.src = data.current.condition.icon;  
  weatherStatus.innerHTML = data.current.condition.text;
}


const form = document.querySelector(".searchData")
form.addEventListener("submit", getData);
