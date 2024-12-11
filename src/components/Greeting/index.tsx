import "./styles.scss";

type GreetingsProps = {
  scrollToContact: () => void;
};

function Greetings({ scrollToContact }: GreetingsProps) {
  return (
    <div className="main__greet">
      <h3>DIN PROFESSIONELLA SNICKARE I JÖNKÖPING!</h3>
      <h2>Vi på Bårarps Bygg utför allt inom traditionellt snickeri i Jönköping!</h2>
      {/* Add onClick handler to the button */}
      <button className="booking__button" onClick={scrollToContact}>
        BOKA
      </button>
    </div>
  );
}

export default Greetings;
