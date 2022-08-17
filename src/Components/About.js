import '../assets/styles/About.css';
import ProjectFeatures from '../assets/json/projectFeatures.json'
import cap from '../assets/img/cap.png'
export default function About({ visible, toggleVisibility }) {

  // Toggle CSS state depending on state
  const showWhenVisible = { display: visible ? "" : "none" };

  return (
    <div id="modal-bg" style={showWhenVisible}>
      <div id="modal">
        <h3>Developing Hack2gether Weather</h3>
        <div className="flex-container">
          {ProjectFeatures.map(item =>
            <div className="feature">
              <div className="feature-image-container">
                <img src={item.image} alt={item.alt} />
              </div>
              <div className="feature-info">
                <h4>{item.feature}</h4>
                <div>{item.desc}</div>
              </div>
            </div>
          )}
        </div>
        <button onClick={toggleVisibility}>Close</button>
      </div>
    </div>

  )
}