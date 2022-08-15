import "./footer.css"
import logo from '../../mlh-prep.png';

export default function Footer({}) {
  return (
    <>
      <div className="footer">
        <img className="mlh-prep-logo" src={logo} alt="MLH Prep Logo"></img>
        <div className="footer-text">
          <p>© 2022 Hack2Together</p>
        </div>
        
      </div>
    </>
  )
}