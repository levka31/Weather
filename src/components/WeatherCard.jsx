import WeatherDetails from './WeatherDetails';

const WeatherCard = ({ weatherData, getWeatherIcon }) => {
  if (!weatherData) return null;

  const { location, current } = weatherData;

  return (
    <div className="weather-card">
      <h2 className="city-name">{location.name}, {location.country}</h2>
      
      <div className="weather-icon">
        {getWeatherIcon(current.condition.code)}
      </div>
      
      <div className="temperature">{current.temp_c}°C</div>

      <div className="feels-like">
        Ощущается как: {current.feelslike_c}°C
      </div>

      <div className="weather-description">
        {current.condition.text}
      </div>

      <WeatherDetails weather={current} getWindDirection={getWindDirection} />

      <div style={{ marginTop: '20px', fontSize: '0.9rem', color: '#636e72' }}>
        Обновлено: {current.last_updated}
      </div>
    </div>
  );
};

const getWindDirection = (degree) => {
  const directions = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ'];
  return directions[Math.round(degree / 45) % 8] || '—';
};

export default WeatherCard;