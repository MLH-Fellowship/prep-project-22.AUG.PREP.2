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
} from "weather-icons-react";

export default function ResultsComponent({ isLoaded, results }) {
  // Weather card
  const getWeatherIcon = (x, size) => {
    switch (x) {
      case "Rain":
        return <WiRain size={size} color="#00ffff" />;
      case "Snow":
        return <WiDaySnow size={size} color="#b3ffff" />;
      case "Clear":
        return <WiDaySunny size={size} color="#ffc34d" />;
      case "Clouds":
        return <WiCloudy size={size} color="#66ccff" />;
      case "Tornado":
        return <WiTornado size={size} color="#999966" />;
      case "Thunderstorm":
        return <WiThunderstorm size={size} color="#3973ac" />;
      case "Dust":
        return <WiDust size={size} color="#adad85" />;
      case "Sand":
        return <WiSandstorm size={size} color="#c9ba9c" />;
      case "Fog":
        return <WiDayFog size={size} color="#acd2cc" />;
      case "Haze":
        return <WiDayHaze size={size} color="#999966" />;
      case "Smoke":
        return <WiSmoke size={size} color="#acac53" />;
      default:
        return undefined;
    }
  };

  return (
    <div className="Results">
      {!isLoaded && <h2>Loading...</h2>}
      {isLoaded && results && (
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
