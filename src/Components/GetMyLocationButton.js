export default function SearchMyLocationButton({getUserLocation}) {
    return (
      <button onClick={getUserLocation} className="btn">Get My Location</button>
    )
  }