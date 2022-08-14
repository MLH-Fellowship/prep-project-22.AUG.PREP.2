export default function SearchMyLocationButton({getUserLocation}) {
    return (
      <button onClick={getUserLocation} className="get-user-loc-btn">Get My Location</button>
    )
  }