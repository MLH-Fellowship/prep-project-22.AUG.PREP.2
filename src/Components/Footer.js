import "../assets/styles/footer.css"
import logo from '../assets/img/mlh-prep.png';

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <img className="mlh-prep-logo" src={logo} alt="MLH Prep Logo"></img>
          <div className="footer-text">
            <p>© 2022 Hack2Together</p>
          </div>
        </div>
      </div>
    </>
  )
}