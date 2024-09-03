import "./styles.scss";
import phoneIcon from "../../assets/phone.png";
import mailIcon from "../../assets/mail.png";
import pinIcon from "../../assets/pin.png";

function Contact() {
  return (
    <div className="main-container">
      <div className="main-container__left">
        <div className="icon">
          <img src={phoneIcon} alt="Phone Icon" />
        </div>
        <h4>0702-732841</h4>
      </div>
      <div className="main-container__mid">
        <div className="icon">
          <img src={mailIcon} alt="Mail Icon" />
        </div>
        <h4>Oskar@bararpsbygg.se</h4>
      </div>
      <div className="main-container__right">
        <div className="icon">
          <img src={pinIcon} alt="Pin Icon" />
        </div>
        <h4>Bårarp ängen 24</h4>
      </div>
 
    </div>
  );
}

export default Contact;
