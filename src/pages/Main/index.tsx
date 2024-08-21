
import "./styles.scss";
import Header from "../../components/Header";
import Greetings from "../../components/Greeting";

function Main() {
  return <div className="main">
    <div className="top">
        <Header/>
        <Greetings/>
    </div>
    <div className="info"></div>
  </div>;
}

export default Main;
