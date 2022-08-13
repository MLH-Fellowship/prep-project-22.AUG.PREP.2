import { useEffect, useState, useRef } from "react";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax 

mapboxgl.accessToken = 'pk.eyJ1Ijoicm95Z2JldiIsImEiOiJjbDFjYzF2ajUwMHgzM2NwcXBzdWVxM3ZvIn0.2k8N-UN2Y7ZdT5vwml9QAw';

export default function Map({ setIsLoaded, setResults, setError }) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => { // mapbox
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
    });

    map.current.on('click', (e) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e.lngLat.lat}&lon=${e.lngLat.lng}&units=metric&appid=${process.env.REACT_APP_APIKEY}`)
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
    });
    }, []);

    return (
        <>
          <div ref={mapContainer} className="map-container" />
        </>
    )
}