//const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cf89639994msh9078aede9085f3fp193d0bjsnd4493a7da52f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
// const weathericon = document.querySelector(".weather-icon")
const getWeather = (city)=>{
	cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(Response => Response.json())
    .then(Response => {
		
		console.log(Response)

		document.querySelector(".temp").innerHTML = Response.temp + "°C";
		document.querySelector(".humidity").innerHTML = Response.humidity + "%";
		document.querySelector(".wind").innerHTML = Response.wind_speed + "km/h";
		
		document.querySelector(".weather").style.display = "block";
	})
    .catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("mumbai")