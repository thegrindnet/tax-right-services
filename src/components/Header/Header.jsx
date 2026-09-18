import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";
import { business, images } from "../../utils/constants.js";

function Header() {
  return (
    <>
      <div className="header__utility">
        <div className="container header__utility-inner">
          <span>Personal service. Right here in Mesquite, NM.</span>
          <span lang="es">Hablamos español <span aria-hidden="true">·</span> Solo con cita</span>
        </div>
      </div>
      <header className="header">
        <div className="container header__inner">
          <a className="header__brand" href="#home" aria-label={`${business.name} — home`}>
            <img className="header__logo" src={images.logo} alt="" width="1532" height="888" />
            <span className="header__name">Tax Right <strong>Services</strong></span>
          </a>
          <Navigation />
        </div>
      </header>
    </>
  );
}
export default Header;
