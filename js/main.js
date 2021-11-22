const getFara = async(city_name) => {
    let API_key = '167cee4a37db710c8f0a62064838265f'
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=imperial&appid=${API_key}`)
    
    document.getElementById('city').innerHTML = response.data.name + ", " + response.data.sys.country
    document.getElementById('forecast').innerHTML = "Forecast: " + response.data.weather[0].main
    document.getElementById('high').innerHTML = "High: " + response.data.main.temp_max + "℉"
    document.getElementById('low').innerHTML = "Low: " + response.data.main.temp_min + "℉"
    document.getElementById('humidity').innerHTML = "Humidity: " + response.data.main.humidity + "%"
    console.log(response.data)
    console.log(response.data.weather[0].main)
    console.log(response.data.main.temp_max + "℉")
    console.log(response.data.main.temp_min + "℉")
    console.log(response.data.main.humidity)
    console.log(' hi fara')
    return response.data
}

const getCel = async(city_name) => {
    let API_key = '167cee4a37db710c8f0a62064838265f'
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${API_key}`)

    document.getElementById('city').innerHTML = response.data.name + ", " + response.data.sys.country
    document.getElementById('forecast').innerHTML = "Forecast: " + response.data.weather[0].main
    document.getElementById('high').innerHTML = "High: " + response.data.main.temp_max + "℃"
    document.getElementById('low').innerHTML = "Low: " + response.data.main.temp_min + "℃"
    document.getElementById('humidity').innerHTML = "Humidity: " + response.data.main.humidity + "%"

    console.log(response.data.weather[0].main)
    console.log(response.data.main.temp_max + "℃")
    console.log(response.data.main.temp_min + "℃")
    console.log(response.data.main.humidity)
    console.log(' hi cel')
    return response.data
}

//creating variable for form
const form = document.querySelector('#dataForm')

// adding event listener for Submission of form
form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    let city_name = document.querySelector('#city_name');
    let this_city = city_name.value
    if(document.getElementById('faraButton').clicked == true){
        getFara(this_city)
    } if(document.getElementById('celButton').clicked == true){
        getCel(this_city)
       
    } 
    console.log('start')
})

const weatherTableBody = document.querySelector("#weatherTableBody");


const weatherTable = document.querySelector('.table')

let response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=167cee4a37db710c8f0a62064838265f`)


// test function to change background image
function setClear(weatherSection) {
    let response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=167cee4a37db710c8f0a62064838265f`)

    var weather_sec = document.getElementById(weatherSection);
    if(response.data.weather[0].main == "Clear"){
        weather_sec.style.backgroundColor= "red";
    }
}


// path for max temp: main.temp_max
// path for forecast: console.log(response.data.weather[0].main)
// path for high: console.log(response.data.main.temp_max)
// path for low: console.log(response.data.main.temp_min)
// path for humidity: console.log(response.data.main.humidity)