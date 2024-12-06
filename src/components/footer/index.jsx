import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-yellow.png";
import Linkedin from "../../assets/icons/linkedin.png";
import Email from "../../assets/icons/arroba.png";

function Footer() {
  return (
    <footer className="d-sm-flex justify-content-between align-items-center">
      <div className="pt-3 pb-3 ms-4">
        <img src={Logo} alt="mBoe portfolio logo" className="my-1" />
        <p>
          <Link
            to="https://www.linkedin.com/in/marte-b%C3%B8e-olsen-b538448b/"
            target="_blank"
            className="text-black text-decoration-none"
          >
            <img src={Linkedin} alt="Linkedin icon" className="icon" /> Marte
            Bøe Olsen
          </Link>
        </p>
        <p>
          <a
            href="mailto:marte.boe.olsen@gmail.com"
            className="text-black text-decoration-none"
          >
            <img src={Email} alt="@ icon" className="icon" />
            marte.boe.olsen@gmail.com
          </a>
        </p>
      </div>
      <div className="d-none d-sm-block pt-3 pb- me-3">
        <p>© 2024 Marte Bøe Olsen</p>
      </div>
    </footer>
  );
}

export { Footer };
