import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card">
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>
      <p>
        <strong>Température :</strong> {weather.main.temp}°C
      </p>
      <p>
        <strong>Conditions :</strong> {weather.weather[0].description}
      </p>
      <p>
        <strong>Humidité :</strong> {weather.main.humidity}%
      </p>
      <p>
        <strong>Vent :</strong> {weather.wind.speed} m/s
      </p>
    </div>
  );
};

export default WeatherCard;
