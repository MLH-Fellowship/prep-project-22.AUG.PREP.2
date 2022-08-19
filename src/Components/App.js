import { useEffect, useState } from "react";
import '../assets/styles/App.css';
import logo from '../assets/img/mlh-prep.png';
import ErrorComponent from "./Error";
import ResultsComponent from "./Results";
import SearchComponent from "./Search";
import RequiredItems from "./RequiredItems";
import Map from "./Map";
import About from "./About";
import Footer from "./Footer";

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("New York City")
  const [coords, setCoords] = useState({ lng: -70.9, lat: 42.35, center: false })
  const [results, setResults] = useState(null);
  const [background, setBackground] = useState("")
  const [visible, setVisible] = useState(false);

  function toggleVisibility() {
    setVisible(!visible);
  };

  // Fetch data based on geolocation
  function getUserLocation() {
    setIsLoaded(false);

    // Use Geolocation API to locate user coordinates
    const geolocateUser = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(function (pos) {
        let lat = pos.coords.latitude
        let lon = pos.coords.longitude
        resolve({ lat, lon });
      }, error)
    })

    // Use coordinates to fetch weather
    geolocateUser.then(res => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${res.lat}&lon=${res.lon}&units=metric&appid=${process.env.REACT_APP_APIKEY}`)
        .then(res => res.json())
        .then((result) => {
          setCoords({ lat: result.coord.lat, lng: result.coord.lon, center: true })
          setIsLoaded(true)
          setCity(result.name)
          setResults(result)
        },
          (error) => {
            setIsLoaded(true)
            setError(error)
          })
    })
  }

  // Fetch data based on user input
  useEffect(() => { // weather
    const fetchData = setTimeout(() => { // fetch data after user stops typing 
      console.log("fetch")
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_APIKEY}`)
        .then(res => res.json())
        .then(
          (result) => {
            if (result['cod'] !== 200) {
              setIsLoaded(false)
            } else {
              setCoords({ lat: result.coord.lat, lng: result.coord.lon, center: true })
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
        <div className="page-container">
          <div className={(isLoaded && results) ? background : undefined}>
            <img className="logo" src={logo} alt="MLH Prep Logo"></img>
            <h2 className="app-header">Enter a city below 👇</h2>
            <SearchComponent city={city} changeCity={setCity} getUserLocation={getUserLocation} />
            <div className="card-container">
              <ResultsComponent isLoaded={isLoaded} results={results} />
              {isLoaded && results && <RequiredItems weatherKind={results.weather[0].main} />}
            </div>
            <Map setIsLoaded={setIsLoaded} setResults={setResults} setError={setError} coords={coords} setCoords={setCoords} setBackground={setBackground} />
            <button id="btn-about" onClick={toggleVisibility}>About this project</button>
            <About
              visible={visible}
              toggleVisibility={toggleVisibility}
            />
            <Footer />
          </div>
        </div>
      </>
    )
  }
}