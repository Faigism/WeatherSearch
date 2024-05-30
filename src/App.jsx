import { useState, useEffect } from 'react'
import errorImg from './assets/images/404.png'
import SearchBox from './components/SearchBox'
import WeatherBox from './components/WeatherBox'
import WeatherDetails from './components/WeatherDetails'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true)

  const Api_Key = '46aac3f9afd9ff022002a086d911f752'

  const fetchWeather = async (countryName) => {
    if (!countryName) return
    setLoading(true)
    setError(null)
    setWeatherData(null)
    setInitialLoad(false)
    try {
      const request = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${Api_Key}&units=metric`
      )
      const response = await request.json()
      if (response.cod === '404') {
        setError('Country not found')
        setWeatherData(null)
      } else {
        setWeatherData(response)
      }
    } catch (error) {
      setError('Error fetching weather data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchWeather(inputValue)
    }, 700)

    return () => {
      clearTimeout(handler)
    }
  }, [inputValue])

  const handleInputChange = (e) => {
    let value = e.target.value.trimStart()
    value = value.replace(/\s+/g, ' ')
    if (value.length > 20) {
      value = value.slice(0, 20)
    }
    setInputValue(value)
  }

  return (
    <div className="App">
      <div
        className="container"
        style={{ height: initialLoad ? '100px' : '555px' }}
      >
        <SearchBox inputValue={inputValue} onInputChange={handleInputChange} />
        {loading && <p className="loading"></p>}
        {error && (
          <div className="not-found active">
            <div className="box">
              <img src={errorImg} alt="404Img" />
              <p>{error}</p>
            </div>
          </div>
        )}
        {weatherData && (
          <>
            <WeatherBox weatherData={weatherData} />
            <WeatherDetails weatherData={weatherData} />
          </>
        )}
      </div>
    </div>
  )
}

export default App
