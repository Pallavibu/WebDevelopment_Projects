// create data
// create an variable to store the element
// create the function to get the data for the weather app
// manipulate the variable of already created element


let data;
const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus =document.getElementById("weatherStatus");

const getData = (event) => {
    event.preventDefault();
    if(!inputBox.value){
        alert("Please Enter the City name:");
        return;
      }
};

const form = document.querySelector(".searchData")
form.addEventListener("submit", getData);