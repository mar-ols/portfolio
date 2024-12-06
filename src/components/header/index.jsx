import Logo from "../../assets/images/logo-yellow.png";

function Header() {
  return (
    <header className="fw-light">
      <div className="text-center text-sm-start d-sm-flex align-items-center justify-content-between">
        <img src={Logo} alt="mBoe portfolio logo" className="ms-sm-3" />
        <nav>
          <p className="nav-link me-md-4 mt-3">ABOUT</p>
          <p className="nav-link me-sm-3 me-md-4 mt-3">PROJECTS</p>
        </nav>
      </div>
    </header>
  );
}

export { Header };
