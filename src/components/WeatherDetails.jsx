const WeatherDetails = ({ weather, getWindDirection }) => {
  return (
    <div className="weather-details">
      <div className="detail-item">
        <div className="detail-label">💨 Ветер</div>
        <div className="detail-value">
          {weather.wind_kph} км/ч
          <br />
          <small>{getWindDirection(weather.wind_degree)}</small>
        </div>
      </div>

      <div className="detail-item">
        <div className="detail-label">💧 Влажность</div>
        <div className="detail-value">{weather.humidity}%</div>
      </div>

      <div className="detail-item">
        <div className="detail-label">🌡️ Давление</div>
        <div className="detail-value">
          {Math.round(weather.pressure_mb * 0.75)} мм рт.ст.
        </div>
      </div>

      <div className="detail-item">
        <div className="detail-label">📍 Видимость</div>
        <div className="detail-value">
          {weather.condition.code <= 3 ? 'Хорошая' : 
           weather.condition.code <= 65 ? 'Умеренная' : 'Ограниченная'}
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;