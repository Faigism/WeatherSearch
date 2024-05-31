import clear from '../assets/images/clear.png'
import cloud from '../assets/images/cloud.png'
import mist from '../assets/images/mist.png'
import rain from '../assets/images/rain.png'
import snow from '../assets/images/snow.png'
const WeatherBox = ({ weatherData }) => {
  const weatherIcon =
    weatherData.weather[0].main === 'Clear'
      ? clear
      : weatherData.weather[0].main === 'Rain'
      ? rain
      : weatherData.weather[0].main === 'Clouds'
      ? cloud
      : weatherData.weather[0].main === 'Snow'
      ? snow
      : weatherData.weather[0].main === 'Mist'
      ? mist
      : ''
  return (
    <div className="weather-box active">
      <img src={weatherIcon} alt="Weather Icon" />
      <h2>{weatherData.name.substring(0, 20)}</h2>
      <div className="temperature">
        {parseInt(weatherData.main.temp)}
        <span>°C</span>
      </div>
      <div className="description">{weatherData.weather[0].description}</div>
    </div>
  )
}
export default WeatherBox
