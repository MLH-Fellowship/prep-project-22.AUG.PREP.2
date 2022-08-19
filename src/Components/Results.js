import "../assets/styles/Results.css";
import {
  WiCloudy,
  WiDayHaze,
  WiDayFog,
  WiDaySnow,
  WiDaySunny,
  WiRain,
  WiTornado,
  WiDust,
  WiSandstorm,
  WiThunderstorm,
  WiSmoke,
  WiHumidity,
  WiBarometer,
  WiStrongWind,
  WiSunrise,
  WiSunset,

} from "weather-icons-react"
import { getFaviconEl, changeFaviconEl } from "./FaviconUtilities"


export default function ResultsComponent({ isLoaded, isFound, results}) {
  // Weather card
  const getWeatherIcon = (x, size) => {
    switch (x) {

      case 'Rain':
        changeFaviconEl(`weather/${x}.png`);
        return <WiRain size={size} color="#00ffff" />
      case 'Snow':
        changeFaviconEl(`weather/${x}.png`);
        return <WiDaySnow size={size} color="#b3ffff" />
      case 'Clear':
        changeFaviconEl(`weather/${x}.png`);
        return <WiDaySunny size={size} color="#ffc34d" />
      case 'Clouds':
        changeFaviconEl(`weather/${x}.png`);
        return <WiCloudy size={size} color="#66ccff" />
      case 'Tornado':
        changeFaviconEl(`weather/${x}.png`);
        return <WiTornado size={size} color="#999966" />
      case 'Thunderstorm':
        changeFaviconEl(`weather/${x}.png`);
        return <WiThunderstorm size={size} color="#3973ac" />
      case 'Dust':
        changeFaviconEl(`weather/${x}.png`);
        return <WiDust size={size} color="#adad85" />
      case 'Sand':
        changeFaviconEl(`weather/${x}.png`);
        return <WiSandstorm size={size} color="#c9ba9c" />
      case 'Fog':
        changeFaviconEl(`weather/${x}.png`);
        return <WiDayFog size={size} color="#acd2cc" />
      case 'Haze':
        changeFaviconEl(`weather/${x}.png`);
        return <WiDayHaze size={size} color="#999966" />
      case 'Smoke':
        changeFaviconEl(`weather/${x}.png`);
        return <WiSmoke size={size} color="#acac53" />
      default:
        changeFaviconEl("favicon.ico");
        return undefined
    }
  
  }
  
  return (
    <div className="Results">
      {!isLoaded && <h2>Loading...</h2>}
      {!isFound && <h2>Not found</h2>}
      {isLoaded && results && isFound && (
        <div className="weather-card">
          <div className="main-info">
            <p className="main-info__location">
              {results.name}, {results.sys.country}
            </p>

            <div className="main-info__degree">
              <p>{getWeatherIcon(results.weather[0].main, 80)}</p>
              <p>{results.main.temp} °C</p>
            </div>
            <p className="main-info__feels-like">
              Feels like {results.main.feels_like}°C
            </p>
          </div>

          <div className="additional-info">
            <p>
              <WiHumidity size={40} color="#ffc34d" />
              Humidity: {results.main.humidity}%
            </p>
            <p>
              <WiBarometer size={40} color="#ffc34d" />
              Pressure: {results.main.pressure} hPa
            </p>
            <p>
              <WiStrongWind size={40} color="#ffc34d" />
              Windspeed: {results.wind.speed} m/s
            </p>
            <p>
              <WiSunrise size={40} color="#ffc34d" />
              Sunrise:{" "}
              {
                new Date(results.sys.sunrise * 1000)
                  .toTimeString()
                  .split("GMT")[0]
              }
              GMT
            </p>
            <p>
              <WiSunset size={40} color="#ffc34d" />
              Sunset:{" "}
              {
                new Date(results.sys.sunset * 1000)
                  .toTimeString()
                  .split("GMT")[0]
              }
              GMT
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
