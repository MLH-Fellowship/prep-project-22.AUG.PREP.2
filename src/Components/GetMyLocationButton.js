import pinIcon from "../assets/img/pin.png";

export default function SearchMyLocationButton({getUserLocation}) {
    return (
      <button onClick={getUserLocation} className="get-user-loc-btn">
        <img src={pinIcon} className="get-usr-loc-icon" />
      </button>
    )
  }