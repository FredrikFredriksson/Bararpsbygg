import "./styles.scss";
import cardImage1 from "../../assets/indoor.jpg";
import cardImage2 from "../../assets/outside_roof.jpg";

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
        >
          <p className="card__text">INOMHUS</p>
        </div>
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
        >
          <p className="card__text">UTOMHUS</p>
        </div>
        <div className="card__right">hej</div>
      </div>
    </div>
  );
}

export default Card;
