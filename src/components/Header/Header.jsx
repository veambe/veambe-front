import { Link } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <img
          className="header-logo"
          src="/images/logo-veambe.webp"
          alt="logo veambe"
          width="114"
          height="38"
        />
      </Link>
      <Navigation />
      <a
        className="insta-link"
        href="https://www.instagram.com/veambe/?hl=es"
        target="_blank"
      >
        instagram
      </a>
    </header>
  );
};

export default Header;
