const clicker = document.getElementById("clicker")
let cityin = document.getElementById("cityin");
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd3f6219df9msh349653e6915b265p1bfe6bjsn31412661c50f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const rowweather = async (city) => {
    try {
        const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        const result = await response.json();
        let row1 = document.getElementById(`${city}1`)
        let row2 = document.getElementById(`${city}2`)
        let row3 = document.getElementById(`${city}3`)
        let row4 = document.getElementById(`${city}4`)
        let row5 = document.getElementById(`${city}5`)
        let row6 = document.getElementById(`${city}6`)
        let row7 = document.getElementById(`${city}7`)
        let row8 = document.getElementById(`${city}8`)
        let row9 = document.getElementById(`${city}9`)
        //Cloud_pct	Feels_like	Humidity	Max_temp	Min_temp	Sunrise	Sunset	Temp	Wind_speed
        row1.innerHTML = result.cloud_pct + "%";
        row2.innerHTML = result.feels_like + "";
        row3.innerHTML = result.humidity + "%";
        row4.innerHTML = result.max_temp + "℃";
        row5.innerHTML = result.min_temp + "";
        row6.innerHTML = result.sunrise;
        row7.innerHTML = result.sunset;
        row8.innerHTML = result.temp + "℃";
        row9.innerHTML = result.wind_speed + "Km/ph";
    } catch (error) {
        console.log(error)
    }
}


const getWeather = async (city) => {
    try {
        const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        firstlink.href = `https://www.bing.com/search?q=${city}+weather&cvid=b8a5d4815b474e58a1522d3c271698a9&aqs=edge..69i57j0l8.4047j0j1&pglt=43&FORM=ANNTA1&PC=U531`
        secondlink.href = `https://www.google.com/maps/place/${city}`
        cityname.innerHTML = city;
        const result = await response.json()
        cloud_pct.innerHTML = result.cloud_pct
        feels_like.innerHTML = result.feels_like
        humidity.innerHTML = result.humidity
        humidity1.innerHTML = result.humidity + "%"
        max_temp.innerHTML = result.max_temp
        min_temp.innerHTML = result.min_temp
        temp.innerHTML = result.temp
        temp1.innerHTML = result.temp + "℃"
        sunrise.innerHTML = result.sunrise
        sunset.innerHTML = result.sunset
        // wind_degrees.innerHTML = result.wind_degrees
        wind_speed.innerHTML = result.wind_speed
        wind_speed1.innerHTML = result.wind_speed + "Km/hr"
        if (result.temp < 10) {
            tempgif.src = "./gifs/snowy.gif"
        }
        console.log(result)

    } catch (error) {
        console.log(error)
    }
}
clicker.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(cityin.value)
})
getWeather("Delhi")
// rowweather("shanghai")
// rowweather("boston")
// rowweather("lucknow")
// rowweather("kolkata")

// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));