import React, { useEffect } from "react";
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
  useEffect(() => {
    // Dynamically load the LightWidget script
    const script = document.createElement("script");
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="main">
      <div className="top">
        <Header />
        <Greetings />
      </div>
      <div className="insta-wrapper">
        <div className="instagram-feed">
          <iframe
            src="//lightwidget.com/widgets/21ec8d77755a5a02a14a6cf88795f725.html"
            scrolling="no"
            allowTransparency={true}
            className="lightwidget-widget"
            style={{
              width: "100%",
              border: "0",
              overflow: "hidden",
              height: "500px",
            }}
          ></iframe>
        </div>
      </div>
      <div className="info" id="info-section">
        <Info />
      </div>
     
      <div className="cards" id="card-section">
        <Card />
      </div>
      <div className="banners" id="banner-section">
        <Banner />
      </div>
      <div className="contacts">
        <Contact />
      </div>
      <div className="messages">
        <Message />
      </div>
      <div className="footers">
        <Footer />
      </div>
    </div>
  );
}

export default Main;
