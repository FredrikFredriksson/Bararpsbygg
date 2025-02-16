import "./styles.scss";
import videoLoop from '/assets/videoloop.mp4';

function Banner() {
  return (
    <div className="banner">
      <video
        className="banner__video"
        src={videoLoop}
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="banner__text">
        <h3>KONTAKTA OSS</h3>
        <p>
          Det är enkelt att förnya ditt hem. Bygg om, sätt upp nya väggar eller
          skapa det perfekta köket. Vi ser till att ditt projekt blir utfört med
          högsta kvalitet och precision. Valet är ditt!
        </p>
      </div>
    </div>
  );
}

export default Banner;
