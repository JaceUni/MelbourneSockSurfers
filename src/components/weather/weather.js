import React, { useEffect, useState } from 'react';
import './weather.css';

const apiKey = "606cabb43cfbaa8f9194285916e6e0f9";
const city = "Gold Coast";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data && data.main) {
          setWeatherData(data);
        } else {
          setErrorMessage('No weather data available.');
        }
      })
      .catch(error => {
        setErrorMessage('Error fetching weather data.');
      });
  }, []);

  return (
    <section className="sectionGrey smallPadding2">
      <div className="weather">
        <div className="weatherapi">
          {weatherData ? (
            <div>
              <h3>Current Weather at {city}</h3>
              <p>Temperature: {weatherData.main.temp.toFixed(1)}°C</p>
              <p>Weather: {weatherData.weather[0].description}</p>
              <p>Humidity: {weatherData.main.humidity}%</p>
              <p>Wind Speed: {(weatherData.wind.speed * 3.6).toFixed(1)} km/h</p>   {/* Converting original m/s units to km/h */}
            </div>
          ) : (
            <p>{errorMessage || 'Loading weather data...'}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Weather;
