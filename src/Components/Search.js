import React from "react";
import GetMyLocationButton from "./GetMyLocationButton";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
  } from "react-places-autocomplete";
import "../assets/styles/Search.css"

export default function SearchComponent({ city, changeCity, getUserLocation }) {
    const [coordinates, setCoordinates] = React.useState({
      lat: null,
      lng: null
    });
    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        changeCity(value);
        setCoordinates(latLng);
      };
      
    return (
        <div>
          <PlacesAutocomplete
            value={city}
            onChange={changeCity}
            onSelect={handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <div className="search-in-group" >
                  <input className="search-input" {...getInputProps({ placeholder: "Type city" })} />
                  <GetMyLocationButton getUserLocation={getUserLocation} />
                  <div className="suggestionElementContainer" >
                    {loading ? <div>...loading</div> : null}

                    {suggestions.map(suggestion => {
                      const style = {
                        backgroundColor: suggestion.active ? "#86c9e3" : "#fff"
                      }

                      return (
                        <div {...getSuggestionItemProps(suggestion, { style })}>
                          {suggestion.description}
                        </div>
                      ); 
                    })}
                  </div>
                </div>
              </div>
            )}
          </PlacesAutocomplete>
    </div>
    )
}