const apiKey = '8af015c2dce2a5bf8a490e2e48cf3f28';  // Replace with your OpenWeatherMap API key

// Function to fetch weather data
function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
                return;
            }
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred while fetching weather data');
        });
}

// Function to display weather data on the page
function displayWeather(data) {
    const location = data.name;
    const description = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;

    document.getElementById('weather-location').textContent = `Weather in ${location}`;
    document.getElementById('weather-description').textContent = `Condition: ${description}`;
    document.getElementById('weather-temperature').textContent = `Temperature: ${temperature} °C`;
    document.getElementById('weather-humidity').textContent = `Humidity: ${humidity}%`;
}

// app.js

function applyBackground() {
    const container = document.getElementById('background-container');

    // Example condition
    const conditionMet = true; // Replace with your actual condition
    
    if (conditionMet) {
        container.classList.add('background-image');
    } else {
        container.classList.remove('background-image');
    }
}

// Call the function when appropriate, e.g., on page load or after a specific event


