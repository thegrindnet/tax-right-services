import "./Contact.css";
import { business } from "../../utils/constants.js";
import Icon from "../Icon/Icon.jsx";

function Contact() {
  return (
    <section className="contact section" id="contact" aria-labelledby="contact-heading">
      <div className="container contact__layout">
        <div className="contact__intro"><p className="eyebrow">Let’s take the next step</p><h2 className="section-title" id="contact-heading">A conversation today.<br /><span>A little less worry tomorrow.</span></h2><p>Call or email Carolina to arrange your appointment. Tell us how we can help, and we’ll find a time to sit down together.</p><div className="contact__actions"><a className="button button--lime" href={business.phoneHref}><Icon name="phone" />{business.phone}</a><a className="button button--outline" href={business.appointmentEmailHref}>Email for an appointment <Icon name="arrow" /></a></div><p className="contact__spanish" lang="es">¿Prefieres hablar español? Con gusto te ayudamos.<br />Llámanos para programar tu cita.</p></div>
        <div className="contact__details">
          <div className="contact__detail"><Icon name="pin" /><div><h3>Local & personal</h3><p>{business.location}<br />Serving surrounding communities</p><a href={business.mapHref} target="_blank" rel="noopener noreferrer">View Mesquite on the map <span aria-hidden="true">↗</span></a><p className="contact__small">Call for the appointment location.</p></div></div>
          <div className="contact__detail"><Icon name="document" /><div><h3>Plan your visit</h3><p>{business.hours}</p><p className="contact__appointment">{business.appointmentNote}<br /><span lang="es">Solo con cita</span></p></div></div>
          <div className="contact__detail"><Icon name="mail" /><div><h3>Get in touch</h3><a href={business.emailHref}>{business.email}</a><p className="contact__fax">Fax: {business.fax}</p></div></div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
