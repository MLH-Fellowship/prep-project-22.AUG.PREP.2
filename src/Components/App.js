import { useEffect, useState, useRef } from "react";
import '../App.css';
import logo from '../mlh-prep.png';
import ErrorComponent from "./ErrorComponent";
import ResultsComponent from "./ResultsComponent";
import SearchComponent from "./SearchComponent";
import Map from "./Map";

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("New York City")
  const [results, setResults] = useState(null);

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
          <SearchComponent city={city} onChange={setCity}/>
          <ResultsComponent isLoaded={isLoaded} results={results}/>
          <Map setIsLoaded={setIsLoaded} setResults={setResults} setError={setError} />
        </div>
      </>
    )
  }
}