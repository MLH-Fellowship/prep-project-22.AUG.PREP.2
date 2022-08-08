import { useEffect, useState, useRef } from "react";
import '../App.css';
import logo from '../mlh-prep.png'
import ErrorComponent from "./Error Component";
import ResultsComponent from "./Results Component";
import SearchComponent from "./Search Component";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoicm95Z2JldiIsImEiOiJjbDFjYzF2ajUwMHgzM2NwcXBzdWVxM3ZvIn0.2k8N-UN2Y7ZdT5vwml9QAw';

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("New York City")
  const [results, setResults] = useState(null);

  const changeCity = (city) => setCity(city);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&appid=" + process.env.REACT_APP_APIKEY)
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
    return <>
      <img className="logo" src={logo} alt="MLH Prep Logo"></img>
      <div>
        <h2>Enter a city below 👇</h2>
        <SearchComponent city={city} changeCity={changeCity} />
        <ResultsComponent isLoaded={isLoaded} results={results}/>
        <div>
          <div ref={mapContainer} className="map-container" />
          </div>
      </div>
    </>
  }
}

// export default function App(){

// };
