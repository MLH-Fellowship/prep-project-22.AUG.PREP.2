export default function SearchMyLocationButton({getUserLocation}) {
    return (
      <button onClick={getUserLocation}>Get My Location</button>
    )
  }