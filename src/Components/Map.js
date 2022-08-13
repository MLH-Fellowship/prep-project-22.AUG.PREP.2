import { useEffect, useState, useRef } from "react";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax 
import "../assets/styles/Map.css"
mapboxgl.accessToken = 'pk.eyJ1Ijoicm95Z2JldiIsImEiOiJjbDFjYzF2ajUwMHgzM2NwcXBzdWVxM3ZvIn0.2k8N-UN2Y7ZdT5vwml9QAw';

export default function Map({ setIsLoaded, setResults, setError }) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    const [mapStyle, setMapStyle] = useState("streets-v11");

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

    useEffect(() => {
        map.current.setStyle('mapbox://styles/mapbox/' + mapStyle);
    }, [mapStyle])

    return (
        <>
            <div ref={mapContainer} className="map-container">
                <details className="map-styles">
                    <summary>Map Styles</summary>
                    <div className="map-radio-btn">
                        <input id="satellite-v9" type="radio" name="rtoggle" value="satellite" checked={mapStyle == "satellite-v9"} onChange={() => setMapStyle("satellite-v9")}/>
                        <label htmlFor="satellite-v9">Satellite</label>
                    </div>
                    <div className="map-radio-btn">
                        <input id="light-v10" type="radio" name="rtoggle" value="light" checked={mapStyle == "light-v10"} onChange={() => setMapStyle("light-v10")}/>
                        <label htmlFor="light-v10">Light</label>
                    </div>
                    <div className="map-radio-btn">
                        <input id="dark-v10" type="radio" name="rtoggle" value="dark" checked={mapStyle == "dark-v10"} onChange={() => setMapStyle("dark-v10")}/>
                        <label htmlFor="dark-v10">Dark</label>
                    </div>
                    <div className="map-radio-btn">
                        <input id="streets-v11" type="radio" name="rtoggle" value="streets" checked={mapStyle == "streets-v11"} onChange={() => setMapStyle("streets-v11")}/>
                        <label htmlFor="streets-v11">Streets</label>
                    </div>
                    <div className="map-radio-btn">
                        <input id="outdoors-v11" type="radio" name="rtoggle" value="outdoors" checked={mapStyle == "outdoors-v11"} onChange={() => setMapStyle("outdoors-v11")}/>
                        <label htmlFor="outdoors-v11">Outdoors</label>
                    </div>
                </details>
            </div>
        </>
    )
}