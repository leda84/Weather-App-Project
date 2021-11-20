const getFara = async(city_name) => {
    let API_key = '167cee4a37db710c8f0a62064838265f'
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=imperial&appid=${API_key}`)
    console.log(response)
    console.log(response.data.weather[0].main)
    console.log(response.data.main.temp_max)
    console.log(response.data.main.temp_min)
    console.log(response.data.main.humidity)
    console.log(' hi fara')
    return response.data
}

const getCel = async(city_name) => {
    let API_key = '167cee4a37db710c8f0a62064838265f'
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${API_key}`)

    console.log(response.data.weather[0].main)
    console.log(response.data.main.temp_max)
    console.log(response.data.main.temp_min)
    console.log(response.data.main.humidity)
    console.log(' hi cel')
    return response.data
}

//creating variable for form
const form = document.querySelector('#dataForm')

// adding event listener for Submission of form
form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    let city_name = document.querySelector('#city');
    let this_city = city_name.value
    if(document.getElementById('faraButton').clicked == true){
        getFara(this_city)
        
    } if(document.getElementById('celButton').clicked == true){
        getCel(this_city)
       
    }
    
    loadData()
    console.log('hi')
})

const weatherTableBody = document.querySelector("#weatherTableBody");


const createList = (forecast, high, low, humidity) => {
    let html = `<tr><td>${forecast}</td>
    <td>${high}</td>
    <td>${low}
    <td>${humidity}</td></tr>`;
    weatherTableBody.innerHTML += html;
}

const weatherTable = document.querySelector('.table')

const loadData = async (jsonData) => {
    const weatherList = await jsonData
    weatherTableBody.innerHTML = ''
    weatherTable.style.display = 'table'
    // weatherList.forEach(element => createList(element.data.weather[0].main, element.data.main.temp_max, element.data.main.temp_min, element.data.main.humidity));
    console.log(weatherList)
}


// path for max temp: main.temp_max
// path for forecast: console.log(response.data.weather[0].main)
// path for high: console.log(response.data.main.temp_max)
// path for low: console.log(response.data.main.temp_min)
// path for humidity: console.log(response.data.main.humidity)