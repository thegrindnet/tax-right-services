import "./Navigation.css";
import { useEffect, useRef, useState } from "react";
import { navigation } from "../../utils/constants.js";
import Icon from "../Icon/Icon.jsx";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);
  const navRef = useRef(null);
  useEffect(() => {
    if (!isOpen) return undefined;
    const closeOnOutside = (event) => {
      if (!navRef.current?.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutside);
    return () => document.removeEventListener("pointerdown", closeOnOutside);
  }, [isOpen]);
  const closeOnEscape = (event) => {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
      toggleRef.current?.focus();
    }
  };
  return (
    <nav className="navigation" aria-label="Main navigation" ref={navRef} onKeyDown={closeOnEscape}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false); }}>
      <button className="navigation__toggle" type="button" ref={toggleRef} aria-expanded={isOpen}
        aria-controls="primary-navigation" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Menu"}<span className={`navigation__bars ${isOpen ? "navigation__bars--open" : ""}`} aria-hidden="true" />
      </button>
      <div className={`navigation__panel ${isOpen ? "navigation__panel--open" : ""}`} id="primary-navigation">
        <ul className="navigation__list">
          {navigation.map((item) => <li key={item.href}><a className="navigation__link" href={item.href} onClick={() => setIsOpen(false)}>{item.label}</a></li>)}
        </ul>
        <a className="button button--blue navigation__cta" href="#contact" onClick={() => setIsOpen(false)}>Schedule an appointment <Icon name="arrow" /></a>
      </div>
    </nav>
  );
}
export default Navigation;
