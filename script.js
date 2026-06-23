const apiKey = "5afe7611125ea5292027fb44ac7e9dd9";

async function getWeather() {

    const city = document.getElementById("city").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("weather-result").innerHTML = `
        <h1>${data.name}</h1>
        <h2>${data.main.temp} °C</h2>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>${data.weather[0].description}</p>
    `;
}