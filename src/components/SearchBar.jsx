const SearchBar = ({ city, setCity, onSearch, loading }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  const handleExampleClick = (cityName) => {
    setCity(cityName);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Введите город (Moscow, London, Paris)..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="search-button" disabled={loading}>
          {loading ? 'Поиск...' : 'Поиск'}
        </button>
      </form>

      <div className="example-cities">
        Примеры: 
        <span className="example-city" onClick={() => handleExampleClick('Moscow')}>Москва</span>
        <span className="example-city" onClick={() => handleExampleClick('London')}>Лондон</span>
        <span className="example-city" onClick={() => handleExampleClick('Paris')}>Париж</span>
        <span className="example-city" onClick={() => handleExampleClick('Tokyo')}>Токио</span>
      </div>
    </>
  );
};

export default SearchBar;