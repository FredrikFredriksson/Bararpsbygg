import React, { useEffect, useState } from "react";
import "./styles.scss";
import instaG from "../../assets/instagram.png";
import headLogo from '../../assets/logga.jpg';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="header__controls">
        <div className="header__logo" onClick={scrollToTop}>
          <img src={headLogo} alt="Bårarps bygg" className="header__logo-image" />
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
