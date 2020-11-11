const weather =  document.querySelector(".js-weather"); 
const COORDS = 'coords';
const apiKey = "a26e55336efc0a9fe414a846906437b9";

function getWeather(lat,lon){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appId=${apiKey}&units=metric
    `).then(function(response){
            return response.json();
    }).then(function(json){
        const temperature = json.main.temp
        const place = json.name;
        weather.innerText= `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuc(position){
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;
   const  coordsObj = {
       latitude,
       longitude
   };
   saveCoords(coordsObj);
   getWeather(latitude,longitude);
}
function handleGeoErr(){
    console.log("Can't find your location");
}

function askForweather(){
    navigator.geolocation.getCurrentPosition(handleGeoSuc, handleGeoErr)
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null)
    askForweather();
    else{
    const parseCoords = JSON.parse(loadedCoords);
   getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}


function init(){
    loadCoords();
}
init();