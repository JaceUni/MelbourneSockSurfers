import React, { useEffect, useState } from 'react';
import './weather.css';

const apiKey = "606cabb43cfbaa8f9194285916e6e0f9";
const city = "Gold Coast";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;     // Create API URL including city and apiKey variables

// ErrorBoundary requirement
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError(error){ 
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    errorService.log({error, errorInfo});
  }
  render() {
    if (this.state.hasError) {
      return <h1>Error when displaying weather details.</h1>;
    }
    return this.props.children;
  }
}

function Weather() {
  const [weatherData, setWeatherData] = useState(null);     // useState hook to store the fetched weather data (weather dashboard requirement)
  const [errorMessage, setErrorMessage] = useState('');     // useState hook to store any error messages (error troubleshooting requirement)

  useEffect(() => {
    fetch(url)      // Get data from API URL...
      .then(response => response.json())    // ... and convert it to JSON.
      .then(data => {   // create impromptu/arrow function.
        if (data && data.main) {    // check if data is received and if it's valid...
          setWeatherData(data);     // ... and if so then update the state with the fetched data.
        } else {
          setErrorMessage('No weather data available.');    // Otherwise provide error message.
        }
      })
      .catch(error => {
        setErrorMessage('Error fetching weather data.');    // Additional error catching.
      });
  }, []);     // Empty array to ensure effect runs only once.

  return (
    <section className="sectionGrey smallPadding2">
      <div className="weather">
        <div className="weatherapi">
          <ErrorBoundary>
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
          </ErrorBoundary>
        </div>
      </div>
    </section>
  );
}

export default Weather;
