const form = document.getElementById('weatherForm')
const inputField = document.getElementById('searchInput')

// DOM elements to update

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const city = inputField.value.trim()
    if (!city) {
        alert('provide a city')
        return
    }

    try {
        const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`)
        const data = await response.json();

        if (!response.ok) {
            console.log(data.message)
        }

        // Update DOM with information from the backend
        // currentCity.innerText = `${data.city}, ${data.country}`
        //currentTemp.innerText = `${Math.round(data.temp)}°`
        //currentCondition.innerText = `Feels like: ${Math.round(data.feed_like)}° | L: ${Math.round(data.temp_min)}° H: ${Math.round(data.temp_max)}°`
        showWeather(data);
    } catch (error) {
        console.error(error.message)
    }

    function showWeather(data) {
        document.getElementById('currentCity').textContent = `${data.city}, ${data.country}`
        document.getElementById('currentTemp').textContent = `${data.temp}°`
        document.getElementById('weatherFeels_like').textContent = `${data.feels_like}`
        document.getElementById('weatherHumidity').textContent = `${data.humidity}`
        document.getElementById('locationID').textContent = `LocationID:${data.id}`;
        document.getElementById('currentPrecip').textContent = `CurrentPrecip:${data.id}`;
        document.getElementById('currentHumidity').t = `CurrentHumidity:${data.id}`;
        document.getElementById('currentgWind').textContent = `CurrentWind:${data.id}`;
    }
})