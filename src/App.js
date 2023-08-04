import logoPhone from "./img/logoPhone.png";
import ig from "./img/ig.png";
import mail from "./img/mail.svg";
import dentist from "./img/dentist.jpg";
import dentistVan from "./img/dentist-van.jpg";
import "./App.css";
import React, { useState } from "react";
import Bio from "./Bio";
import PopUp from "./PopUp";
import Checkout from "./Checkout";

function App() {
  const [popUp, setPopUp] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logoPhone} className="App-logo" alt="logo" />
      </header>
      <Checkout />
      {popUp && <PopUp setPopUp={setPopUp} />}
      <div>
        <div className="wave">
          <div className="slogan-text">
            <p>
              I changed my Place <br></br>I changed my Goals<br></br>I changed
              my Diet<br></br>I changed my Lifestyle<br></br>
              and now...<br></br>I changed my Practice!
            </p>
            <img src={dentist} className="dentist" alt="logo" />
          </div>
        </div>
        <div className="wave">
          <div className="what-i-do">
            <h1 className="title">WHAT I DO </h1>
            <ul className="list">
              <li>Dental Coaching</li>
              <li>Dentosophic Consultation</li>
              <li>Metal-Free Implantology</li>
              <li>Mouth Reading </li>
              <li>Mineral Dental Reconstruction</li>
              <li>Natural Teeth Cleaning </li>
              <li>Safe Amalgam Removal</li>
            </ul>
            <img src={dentistVan} className="dentistVan" alt="logo" />
          </div>
          <div className="aboutMe">
            <Bio />
          </div>

          <div className="appointment">
            <p>
              We can meet in person, <br></br>or make a Zoom call.
            </p>
            <a
              href="https://calendly.com/nomadentist/appointment"
              target="_blank"
              rel="noreferrer"
            >
              <button>Book an appointment</button>
            </a>
            <p className="bye">
              Thanks for visiting the Nomadentist landing page. <br></br>
              The full website is coming up soon.
            </p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <a
          href="https://instagram.com/gianni.schultz"
          target="_blank"
          rel="noreferrer"
        >
          <img src={ig} className="ig-logo" alt="logo"></img>
        </a>
        <a href="mailto:docfailla@gmail.com" target="_blank" rel="noreferrer">
          <img src={mail} className="mail-logo" alt="logo"></img>
        </a>
      </footer>
    </div>
  );
}

export default App;
