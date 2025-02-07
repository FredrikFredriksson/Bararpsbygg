import "./styles.scss";
import headLogo from "../../assets/logga.jpg";

function Header() {
  return (
    <div className="footer">
      <div className="footer__container">
        <img src={headLogo} alt="Logo" className="footer__logo" />
      </div>
      <div className="footer__container">
        <h5>Adress</h5>
        <p>Bårarp ängen 28</p>
        <p>55628 JÖNKÖPING</p>
      </div>
      <div className="footer__container">
        <h5>Kontakt</h5>
        <p>Telefon: 0702-732841</p>
        <p>Epost: Oskar@bararpsbygg.se</p>
      </div>
    </div>
  );
}

export default Header;
