const apikey = "1145fdd88c67cd8846eecbcd9a40681c";
     const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
     const searchBox = document.querySelector(".search input");
     const searchBtn = document.querySelector(".search button");
     const weatherIcon = document.querySelector(".weather-icon");

     /* const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=&appid=1145fdd88c67cd8846eecbcd9a40681c&units=metric"; */
    //  async function checkWeather(city){
    //     const response = await fetch(apiurl + city +'&appid=' + apikey);
    //     var data = await response.json();
    //     console.log(data);

    //     document.querySelector(".city").innerHTML = data.name;
    //     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    //     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    //     document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    //  }
    //  searchBtn.addEventListener("click",()=>{
    //     checkWeather(searchBox.value);
    //  })


    async function checkWeather(city) {
    const response = await fetch(apiurl + city + '&appid=' + apikey);
    var data = await response.json();

    // Check if the response was successful
    if (response.status === 200) {
        // Valid response, update the UI
        // console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    } else {
        // If the response is not successful, display an error message
        console.error("Error: " + data.message); // Log the error message from the API
        document.querySelector(".city").innerHTML = "City not found";
        document.querySelector(".temp").innerHTML = "--";
        document.querySelector(".humidity").innerHTML = "--";
        document.querySelector(".wind").innerHTML = "--";
    }

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="images/drizzel.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
}

 searchBtn.addEventListener("click",()=>{
        checkWeather(searchBox.value);
     })