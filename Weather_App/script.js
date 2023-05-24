
let data;
const inputBox = document.getElementById("inputBox");
const currentTime = document.getElementById("currentTime")
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

  currentTime.innerHTML = data.location.localtime;
  countryName.innerHTML = data.location.country;
  stateName.innerHTML = data.location.region;
  cityName.innerHTML = data.location.name;
  humidity.innerHTML = data.current.humidity;
  windSpeed.innerHTML = data.current.wind_kph;
  temprature.innerHTML = data.current.temp_c;
  logoImage.src = data.current.condition.icon;
  weatherStatus.innerHTML = data.current.condition.text;

  if (weatherStatus.innerHTML === "Sunny") {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1485395578879-6ba080c9cdba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')";
  } else if (weatherStatus.innerHTML === "Partly cloudy") {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1603437873662-dc1f44901825?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')";

  } else if (weatherStatus.innerHTML === "Rainy") {
    document.body.style.backgroundImage = "url('https://wallpapers.com/images/hd/rain-background-0gxckn1rxnuwpake.jpg')";
  } else {
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg')";
  }
}


const form = document.querySelector(".searchData")
form.addEventListener("submit", getData);

// videos can also be added 
// Images are added
