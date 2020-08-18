import React from "react";
import "./customcard.styles.scss";

const CustomCard = ({ children, logForm }) => (
  <div>
    <div className="course">
      <div className="course-preview">
        {logForm ? (
          <h3>
            Add <br />
            <br />
            New <br />
            <br /> Log
          </h3>
        ) : (
          ""
        )}
      </div>
      <div className="course-info">{children}</div>
    </div>
  </div>
);

export default CustomCard;
