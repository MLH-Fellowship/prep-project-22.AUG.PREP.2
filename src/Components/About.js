import '../assets/styles/About.css';
import ProjectFeatures from '../assets/json/projectFeatures.json'

export default function About({ visible, toggleVisibility }) {

  // Toggle CSS state depending on state
  const showWhenVisible = { display: visible ? "" : "none" };

  return (
    <div id="modal-bg" style={showWhenVisible}>
      <div id="modal-container">
        <div id="modal">
          <h2>Developing Hack2gether Weather</h2>
          <div className="flex-container">
            {ProjectFeatures.map((item, idx) =>
              <div key={idx} className="feature">
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
          <p><a href="https://prep-22-aug-prep-2-portfolio.netlify.app/">Check out our Pod Portfolio project!</a></p>
          <button id="btn-close" onClick={toggleVisibility}>Close</button>
        </div>
      </div>
    </div>

  )
}