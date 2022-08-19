import pinIcon from "../assets/img/pin.png";

export default function SearchMyLocationButton({getUserLocation}) {
    return (
      <button onClick={getUserLocation} className="get-user-loc-btn">
        <div class="tooltip">
          <img src={pinIcon} className="get-usr-loc-icon" />
          <span class="tooltiptext">Get My Location</span>
        </div>
      </button>
    )
  }