import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul className="navigation">
        <li className="navigation-links">
          <NavLink to="/">portfolio</NavLink>
        </li>
        <li className="navigation-links">
          <NavLink to="/sobre-mi">sobre mí</NavLink>
        </li>
        <li className="navigation-links">
          <NavLink to="/contacto">contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
