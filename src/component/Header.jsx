import React, { useState, useEffect } from "react";
import axios from "axios";

const Header = () => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "d4d64c6257b1849abe795e629d9f7c64";
  const LOCATION = "Bengaluru";

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&units=metric&appid=${API_KEY}`
        );
        console.log("API Response: ", response.data);
        setWeather(response.data);
      } catch (err) {
        console.error(
          "Weather Fetch Error: ",
          err.response ? err.response.data : err.message
        );
        setError("Failed to fetch weather data");
      }
    };

    fetchWeather();
  }, [LOCATION, API_KEY]);

  return (
    <div className="flex flex-col items-end space-y-4">
      <div className="text-xl text-gray-800">{time.toLocaleTimeString()}</div>

      <div className="bg-white p-1 text-right">
        {weather ? (
          <div>
            <h3 className="font-serif text-gray-700">
              Weather in {weather.name}
            </h3>
            <p className="text-gray-600">Temperature: {weather.main.temp}°C</p>
            <p className="text-gray-600">
              Condition: {weather.weather[0].description}
            </p>
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p className="text-gray-500">Loading weather...</p>
        )}
      </div>
    </div>
  );
};

export default Header;
