
import "./styles.scss";
import Header from "../../components/Header";
import Greetings from "../../components/Greeting";
import Info from "../../components/Info";

function Main() {
  return <div className="main">
    <div className="top">
        <Header/>
        <Greetings/>
    </div>
    <div className="info">
      <Info/>
    </div>
  </div>;
}

export default Main;
