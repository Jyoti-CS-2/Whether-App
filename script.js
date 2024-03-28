document.getElementById('getWeatherBtn').addEventListener('click', function() {
var city = document.getElementById('city').value;
var apiKey = '0aa91914991c0cff61ac99edf25ca820'; 

// Fetch weather data from OpenWeatherMap API
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
.then(response => response.json())
.then(data => {
    // Display weather data on the webpage
    var weatherData = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    document.getElementById('weatherData').innerHTML = weatherData;
})
.catch(error => {
    console.error('Error fetching weather data:', error);
    document.getElementById('weatherData').innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
});
});

