const apiKey = '71050780ff7e4a03a7b85604251008'; //http://api.weatherapi.com/v1/current.json?&q=Astana&key=71050780ff7e4a03a7b85604251008
const apiURL = 'http://api.weatherapi.com/v1/current.json?'; //http://api.weatherapi.com/v1/current.json?key=71050780ff7e4a03a7b85604251008&q=Astana
const searchBar = document.querySelector('.search-bar');
const searchBut = document.querySelector('.search-button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(apiURL + `&q=${city}` + `&key=${apiKey}`);
    const data = await response.json();
    console.log(data);

    if (data.error) {
      document.querySelector(".error").style.display = "block";
    }
    else{
        document.querySelector('.city-name').innerHTML = data.location.name;
        document.querySelector('.temp').innerHTML = `${Math.round(data.current.temp_c)}°C`;
        document.querySelector('.humidity-percentage').innerHTML = data.current.humidity + "%";
        document.querySelector('.wind-speed').innerHTML = data.current.wind_kph + "km/h";
        weatherIcon.src = "https:" + data.current.condition.icon;
        document.querySelector('.weather').style.display = 'block';
    }

}

searchBut.addEventListener('click', ()=>{
    checkWeather(searchBar.value);
});

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkWeather(searchBar.value);
    }
})