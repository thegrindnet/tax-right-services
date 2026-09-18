import "./Hero.css";
import { business, images } from "../../utils/constants.js";
import Icon from "../Icon/Icon.jsx";

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="container hero__layout">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">Tax preparation & bookkeeping</p>
          <h1 id="hero-heading">Your peace<br />of mind.<br /><span>Our priority.</span></h1>
          <p className="hero__spanish" lang="es">Tu tranquilidad financiera, en tu idioma.</p>
          <p className="hero__description">Taxes, business books, and everyday paperwork—made easier with personal support from Carolina Santiago. In English and Spanish.</p>
          <div className="hero__actions">
            <a className="button button--lime" href={business.phoneHref}><Icon name="phone" />Call to book a visit</a>
            <a className="hero__services-link" href="#services">Explore our services <Icon name="arrow" /></a>
          </div>
          <p className="hero__location"><Icon name="pin" />Mesquite, NM <span aria-hidden="true">/</span> By appointment only</p>
        </div>
        <div className="hero__visual">
          <div className="hero__portrait-card">
            <div className="hero__card-top"><span>Your local tax partner</span><span className="hero__languages">EN / ES</span></div>
            <img className="hero__portrait" src={images.portrait} alt="Carolina Santiago, tax preparer and bookkeeper at Tax Right Services" width="880" height="799" fetchPriority="high" />
            <div className="hero__person"><h2>{business.owner}</h2><p>{business.role}</p></div>
            <div className="hero__card-bottom"><Icon name="check" /><span>{business.tagline}</span></div>
          </div>
          <p className="hero__signature">A familiar face. A helping hand.</p>
        </div>
      </div>
      <div className="hero__trust">
        <div className="container hero__trust-inner">
          <p><Icon name="document" />Authorized IRS e-file provider</p>
          <p><Icon name="language" />English & Spanish</p>
          <p><Icon name="people" />Individuals & small businesses</p>
        </div>
      </div>
    </section>
  );
}
export default Hero;
