import React from "react";
import "./spinner.css";

const Spinner: React.FC = () => {
  return (
    <div className="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
