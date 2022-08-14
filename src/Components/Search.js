import React from "react";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
  } from "react-places-autocomplete";
import "../assets/styles/Search.css"
  let suggestionElementContainer = {
    maxWidth: "800px",
    margin: "0 auto",
    color: "#2b2929",
    marginTop: "5px"
  }

export default function SearchComponent({city, changeCity}) {
    //const [city, setCity] = React.useState("");
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
            {/* <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p> */}

            <input className="search-input" {...getInputProps({ placeholder: "Type city" })} 
             />

            <div style={suggestionElementContainer}>
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
        )}
      </PlacesAutocomplete>
    </div>
    )
}