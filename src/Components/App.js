import { useEffect, useState } from "react";
import '../App.css';
import logo from '../mlh-prep.png';
import ErrorComponent from "./ErrorComponent";
import ResultsComponent from "./ResultsComponent";
import SearchComponent from "./SearchComponent";
import RequiredItems from "./RequiredItems";
import useLocation from "../Hooks/useLocation";
import Map from "./Map";

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("New York City")
  const [results, setResults] = useState(null);

  const geolocateUser = useLocation();

  // Fetch data based on geolocation
  useEffect(() => {
    if (geolocateUser.length !== 0) {
      fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${geolocateUser[0]}&lon=${geolocateUser[1]}&limit=1&appid=${process.env.REACT_APP_APIKEY}`)
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
  }, [geolocateUser]);

  // Fetch data based on user input
  useEffect(() => { // weather
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_APIKEY}`)
      .then(res => res.json())
      .then(
        (result) => {
          if (result['cod'] !== 200) {
            setIsLoaded(false)
          } else {
            setIsLoaded(true);
            setResults(result);
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [city])

  if (error) {
    return <ErrorComponent error={error} />;
  } else {
    return (
      <>
        <div>
          <img className="logo" src={logo} alt="MLH Prep Logo"></img>
          <h2>Enter a city below 👇</h2>
          <SearchComponent city={city} changeCity={setCity} />
          <ResultsComponent isLoaded={isLoaded} results={results}/>
          {isLoaded && results && <RequiredItems weatherKind={results.weather[0].main} />}
          <Map setIsLoaded={setIsLoaded} setResults={setResults} setError={setError} />
        </div>
      </>
    )
  }
}