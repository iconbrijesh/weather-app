const apikey = "e1ac2dde3b192921605559564f6829cc";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".firstbox input");
const searchbtn = document.querySelector(".firstbox button");

const weathericon =document.querySelector(".weather-icon");

async function checkweather(city){
    const response =await fetch(apiurl + city +`&appid=${apikey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weathericon.src= "images/clouds.png";
    }
    else if(data.weather[0].main =="Clear"){
        weathericon.src= "images/clear.png";
    }
    else if(data.weather[0].main =="Drizzle"){
        weathericon.src= "images/drizzle.png";
    }
     else if(data.weather[0].main =="Humidity"){
        weathericon.src= "images/humidity.png";
    }
    else if(data.weather[0].main =="Mist"){
        weathericon.src= "images/mist.png";
    }
    else if(data.weather[0].main =="Rain"){
        weathericon.src= "images/rain.png";
    }
    else if(data.weather[0].main =="Snow"){
        weathericon.src= "images/snow.png";
    }
    
    document.querySelector(".weather").style.display= "block";



}

searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value)
})
