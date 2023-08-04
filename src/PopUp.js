import React from "react";
import teeth from "./img/teeth.svg";
import cookie from "./img/cookie.svg";
import "./PopUp.css";

const PopUp = (props) => {
  // function that takes boolean as param to conditionally display popup
  const { setPopUp } = props;

  return (
    <div className="cookies-container">
      <div className="container">
        <h1>
          <img className="teeth-img" src={teeth} alt="tooth" /> &nbsp; This site
          does not use Cookies!&nbsp;
          <img className="cookie-img" src={cookie} alt="cookie"></img>&nbsp;
          They are bad for the teeth.&nbsp;
          <img className="teeth-img" src={teeth} alt="tooth" />
        </h1>
      </div>
      <div className="cookies-button-container">
        <button className="cookies-button" onClick={() => setPopUp(false)}>
          {" "}
          That's awesome!{" "}
        </button>
        <button className="cookies-button" onClick={() => setPopUp(false)}>
          {" "}
          Oooh, I wanted Cookies.{" "}
        </button>
      </div>
    </div>
  );
};

export default PopUp;
