const WeatherDetails = ({ weatherData }) => {
  return (
    <div className="weather-details active">
      <div className="humidity">
        <i className="bx bx-water"></i>
        <div className="text">
          <div className="info-humidity">
            <span>{weatherData.main.humidity}%</span>
          </div>
          <p>Humidity</p>
        </div>
      </div>
      <div className="wind">
        <i className="bx bx-wind"></i>
        <div className="text">
          <div className="info-wind">
            <span>{parseInt(weatherData.wind.speed)}m/s</span>
          </div>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  )
}
export default WeatherDetails
