import "./TextInput.css";
import React from "react";

const TextInput = (props: any) => {
  const { className, label, name, value, handleInputChange } = props;
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        className="TextInput"
        name={name}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default TextInput;

type TextInputProps = {
  className: any;
  label: string;
  name: string;
  value: any;
  handleInputChange: any;
};
