import { useState } from 'react';
import { useWeather } from './hooks/useWeather';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Loading from './components/Loading';

function App() {
  const [city, setCity] = useState('');
  const {
    weatherData,
    loading,
    error,
    fetchWeather,
    getWeatherIcon,
    getWindDirection,
    updateBackground
  } = useWeather();

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeather(city.trim()).then(() => {
        if (weatherData) {
          updateBackground(weatherData.current.condition.code);
        }
      });
    }
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>🌤️ Погода</h1>
        <p>Узнайте текущую погоду в любом городе</p>
      </div>

      <SearchBar 
        city={city}
        setCity={setCity}
        onSearch={handleSearch}
        loading={loading}
      />

      {loading && <Loading city={city} />}

      {error && <div className="error">❌ {error}</div>}

      {weatherData && !loading && (
        <>
          <WeatherCard 
            weatherData={weatherData} 
            getWeatherIcon={getWeatherIcon}
            getWindDirection={getWindDirection}
          />
          <div className="success-message">
            ✅ Данные успешно загружены для {weatherData.location.name}
          </div>
        </>
      )}

      {!weatherData && !loading && !error && (
        <div className="instruction">
          <p>Введите название города или выберите из примеров</p>
          <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>
            Работает на Open-Meteo API • Бесплатно • Без регистрации
          </p>
        </div>
      )}
    </div>
  );
}

export default App;