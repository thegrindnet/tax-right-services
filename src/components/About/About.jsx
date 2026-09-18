import "./About.css";
import { business, images, commitments } from "../../utils/constants.js";
import Icon from "../Icon/Icon.jsx";

function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-heading">
      <div className="container about__layout">
        <div className="about__intro">
          <p className="eyebrow">Meet Carolina / <span lang="es">Conócenos</span></p>
          <h2 className="section-title" id="about-heading">Behind every return,<br />there’s a real person.</h2>
          <p className="about__lead">And you deserve to work with someone who sees that.</p>
          <p>Led by {business.owner}, Tax Right Services brings a personal approach to tax preparation and bookkeeping in {business.location}, and surrounding communities.</p>
          <p>Whether you’re filing for your family, managing a small business, or navigating a form, Carolina offers experienced, patient support. We take time to listen and explain things in a way that makes sense to you.</p>
          <a className="text-link" href={business.appointmentEmailHref}>Connect with Carolina <Icon name="arrow" /></a>
        </div>
        <div className="about__details">
          <div className="about__quote"><span className="about__quote-mark" aria-hidden="true">“</span><p lang="es">Tu tranquilidad financiera,<br />en tu idioma.</p><span>Personal support, in the language you prefer.</span></div>
          <ul className="about__commitments">{commitments.map((item) => <li key={item.title}><span className="about__icon"><Icon name={item.icon} /></span><div><h3>{item.title}</h3><p>{item.description}</p></div></li>)}</ul>
          <a className="about__flyer" href={images.flyer} target="_blank" rel="noopener noreferrer"><img src={images.flyer} width="1226" height="1193" alt="Tax Right Services bilingual service flyer" loading="lazy" /><span>Keep our information handy<strong>View our bilingual flyer <Icon name="arrow" /></strong></span></a>
        </div>
      </div>
    </section>
  );
}
export default About;
