import React, { useState } from "react";
import PopUp from "./PopUp";

const Checkout = () => {
  // controls if popup displays
  const [popUp, setPopUp] = useState(true);
  // adds class to darken background color

  return <div>{popUp && <PopUp setPopUp={setPopUp} />}</div>;
};

export default Checkout;
