import "./FAQ.css";
import { business, faqs } from "../../utils/constants.js";
import Icon from "../Icon/Icon.jsx";

function FAQ() {
  return (
    <section className="faq section" id="faq" aria-labelledby="faq-heading">
      <div className="container faq__layout">
        <div className="faq__intro"><p className="eyebrow">A little clarity</p><h2 className="section-title" id="faq-heading">Good questions.<br />Clear answers.</h2><p>A few things to know before your visit. Have another question? We’re here to help.</p><a className="text-link" href={business.phoneHref}>Ask Carolina <Icon name="arrow" /></a></div>
        <div className="faq__items">{faqs.map((item, index) => <details className="faq__item" key={item.question}><summary><span className="faq__number">0{index + 1}</span><span>{item.question}</span><span className="faq__indicator" aria-hidden="true" /></summary><div className="faq__answer"><p>{item.answer}</p>{item.spanish && <p lang="es">{item.spanish}</p>}{item.contact && <p className="faq__contact"><a href={business.phoneHref}>{business.phone}</a><a href={business.emailHref}>{business.email}</a></p>}</div></details>)}</div>
      </div>
    </section>
  );
}
export default FAQ;
