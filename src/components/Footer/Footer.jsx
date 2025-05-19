import "./Footer.css";
import { MdOutlineColorLens } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <span className="footer__text">© 2023 Veambe</span>
      <div className="media__icons">
        <a
          target="_blank"
          href="https://illustrators.catalanarts.cat/ca/perfil/veambe"
        >
          <MdOutlineColorLens
            aria-label="logo Institut Català de les Empreses Culturals"
            className="media__icons--all"
          />
        </a>

        <a target="_blank" href="https://www.instagram.com/veambe/?hl=es">
          <FiInstagram aria-label="logo instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
