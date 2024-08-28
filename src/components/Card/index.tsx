import "./styles.scss";
import cardImage1 from "../../assets/outside_roof.jpg";
import cardImage2 from "../../assets/outise_wall.jpg";
import cardImage3 from "../../assets/stairs.jpg";

function Card() {
  return (
    <div className="card">
      <div className="card__wrap">
        <div
          className="card__left"
          style={{
            backgroundImage: `url(${cardImage1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="card__right">hej</div>
      </div>
      <div className="card__wrap">
        <div
          className="card__left"
          style={{
            backgroundImage: `url(${cardImage2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="card__right">hej</div>
      </div>
      <div className="card__wrap">
        <div
          className="card__left"
          style={{
            backgroundImage: `url(${cardImage3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="card__right">hej</div>
      </div>
    </div>
  );
}

export default Card;
