import "./styles.scss";
import instaG from "../../assets/instagram.png";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Header() {
  return (
    <div className="header">
      <div className="header__controls">
        <div className="header__logo" onClick={scrollToTop}>
          Bårarps bygg
        </div>
        <div className="header__nav">
          <a href="#home" className="header__nav-link">
            OM OSS
          </a>
          <a href="#about" className="header__nav-link">
            INOMHUS
          </a>
          <a href="#services" className="header__nav-link">
            UTOMHUS
          </a>
          <a href="#contact" className="header__nav-link">
            KONTAKTA OSS
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="header__nav-link"
          >
            <img src={instaG} alt="Instagram" className="header__nav-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
