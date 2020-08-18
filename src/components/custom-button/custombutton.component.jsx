import React from "react";
import "./custombutton.styles.scss";

const CustomButton = ({ children, formBtn, handleChange, id }) => (
  <button
    className={`${formBtn ? "form-btn" : ""} btn`}
    onClick={handleChange}
    id={id}
  >
    {children}
  </button>
);

export default CustomButton;
