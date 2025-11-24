const Loading = ({ city }) => {
  return (
    <div className="loading">
      ⏳ Загрузка данных о погоде для {city}...
    </div>
  );
};

export default Loading;