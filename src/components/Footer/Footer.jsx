import "./Footer.css";
import { business, navigation, images } from "../../utils/constants.js";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <a className="footer__brand" href="#home"><img src={images.logo} alt="Tax Right Services — Tax & Bookkeeping" width="1532" height="888" loading="lazy" /><span>{business.tagline}</span></a>
          <nav className="footer__nav" aria-label="Footer navigation">{navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</nav>
          {business.facebookUrl ? <a className="footer__social" href={business.facebookUrl} target="_blank" rel="noopener noreferrer">Facebook ↗</a> : <span className="footer__social footer__social--pending">Facebook <small>Link coming soon</small></span>}
        </div>
        <div className="footer__bottom"><p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p><p>Mesquite, New Mexico <span aria-hidden="true">·</span> <span lang="es">Hablamos español</span></p></div>
      </div>
    </footer>
  );
}
export default Footer;
