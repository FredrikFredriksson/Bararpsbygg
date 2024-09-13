import "./styles.scss";
import Header from "../../components/Header";
import Greetings from "../../components/Greeting";
import Info from "../../components/Info";
import Card from "../../components/Card";
import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Message from "../../components/Message";
import Footer from "../../components/Footer";

function Main() {
  return (
    <div className="main">
      <div className="top">
        <Header />
        <Greetings />
      </div>
      <div className="info">
        <Info />
      </div>
      <div className="cards">
        <Card />
      </div>
      <div className="banners">
        <Banner />
      </div>
      <div className="contacts">
        <Contact />
      </div>
      <div className="messages">
        <Message />
      </div>
      <div className="footers">
        <Footer/>
      </div>
    </div>
  );
}

export default Main;
