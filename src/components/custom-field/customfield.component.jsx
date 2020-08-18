import React from "react";
import "./customfield.styles.scss";

const CustomField = ({
  placeholder,
  messageField,
  searchField,
  handleChange,
  value,
}) => (
  <div>
    <input
      className={`${messageField ? "message-field" : ""} ${
        searchField ? "search-field" : ""
      } custom-field `}
      type={`${searchField ? "search" : "text"}`}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  </div>
);

export default CustomField;
