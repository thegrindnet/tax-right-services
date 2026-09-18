import "./Services.css";
import { business, services } from "../../utils/constants.js";
import Icon from "../Icon/Icon.jsx";

function Services() {
  return (
    <section
      className="services section"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <div className="services__heading">
          <div>
            <p className="eyebrow">
              How we can help / <span lang="es">Servicios</span>
            </p>
            <h2 className="section-title" id="services-heading">
              The support you need.
              <br />
              The attention you deserve.
            </h2>
          </div>
          <p>
            From your personal tax return to the details of running a business,
            let’s take the next step together.
          </p>
        </div>
        <div className="services__grid">
          {services.map((service) => (
            <article
              className={`services__card ${
                service.featured ? "services__card--featured" : ""
              }`}
              key={service.id}
            >
              <h3>
                {service.title}
                {service.id === "notary" && <sup>*</sup>}
              </h3>
              <p className="services__spanish" lang="es">
                {service.spanish}
              </p>
              <p className="services__description">{service.description}</p>
              {service.featured && (
                <a className="services__tax-link" href="#contact">
                  Let’s talk taxes <Icon name="arrow" />
                </a>
              )}
            </article>
          ))}
          <div className="services__help">
            <p className="services__help-title">
              Not sure where
              <br />
              to start?
            </p>
            <p>
              Tell Carolina what you need.
              <br />
              We’ll take it from there.
            </p>
            <a className="text-link" href={business.phoneHref}>
              Give us a call <Icon name="arrow" />
            </a>
          </div>
        </div>
        <p className="services__disclaimer">
          *Not a licensed attorney to practice law in this state.{" "}
          <span lang="es">
            No soy abogado con licencia para ejercer la abogacía en este estado.
          </span>
        </p>
      </div>
    </section>
  );
}
export default Services;
