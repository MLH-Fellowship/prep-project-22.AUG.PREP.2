import { useEffect, useState } from "react";
import '../App.css';
import logo from '../mlh-prep.png';
import ErrorComponent from "./ErrorComponent";
import ResultsComponent from "./ResultsComponent";
import SearchComponent from "./SearchComponent";
import RequiredItems from "./RequiredItems";
import useLocation from "../Hooks/useLocation";
import GetMyLocationButton from "./GetMyLocationButton";
import Map from "./Map";

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("New York City")
  const [coords, setCoords] = useState(null)
  const [results, setResults] = useState(null);

  const geolocateUser = useLocation();
  const [background, setBackground] = useState("")

  // Fetch data based on geolocation
  function getUserLocation() {
    if (geolocateUser.length !== 0) {
      fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${geolocateUser[0]}&lon=${geolocateUser[1]}&limit=1&appid=${process.env.REACT_APP_APIKEY}`)
        .then(res => res.json())
        .then(
          (result) => {
            setCity(result[0].name);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }
  }

  // Fetch data based on user input
  useEffect(() => { // weather
    console.log(city);
    const fetchData = setTimeout(() => { // fetch data after user stops typing 
      console.log("fetch")
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_APIKEY}`)
        .then(res => res.json())
        .then(
          (result) => {
            if (result['cod'] !== 200) {
              setIsLoaded(false)
            } else {
              setCoords({lat: result.coord.lat, lon: result.coord.lon})
              setIsLoaded(true);
              setResults(result);
              setBackground(result.weather[0].main)
            }
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, 1000) // 1 second therhold 

      return () => clearTimeout(fetchData)
  }, [city])

  if (error) {
    return <ErrorComponent error={error} />;
  } else {
    return (
      <>
        <div className={background}>
          <img className="logo" src={logo} alt="MLH Prep Logo"></img>
          <h2>Enter a city below 👇</h2>
          <SearchComponent city={city} changeCity={setCity} />
          <GetMyLocationButton getUserLocation={getUserLocation}/>
          <ResultsComponent isLoaded={isLoaded} results={results}/>
          {isLoaded && results && <RequiredItems weatherKind={results.weather[0].main} />}
          <Map setIsLoaded={setIsLoaded} setResults={setResults} setError={setError} coords={coords}/>
        </div>
      </>
    )
  }
}