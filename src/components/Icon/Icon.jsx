import "./Icon.css";
import sprite from "../../assets/icons/sprite.svg?no-inline";

function Icon({ name, className = "" }) {
  return <svg className={`icon ${className}`} width="24" height="24" aria-hidden="true" focusable="false"><use href={`${sprite}#${name}`} /></svg>;
}
export default Icon;
