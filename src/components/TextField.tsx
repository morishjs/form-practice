import React, { FunctionComponent } from "react";
import { InputProps } from "../types/InputProps";
import useInput from "../hooks/useInput";

const TextField: FunctionComponent<InputProps> = ({
  validates,
  source,
  label,
  placeholder,
  type,
  emailCheck,
}) => {
  const { value, onChange, error } = useInput({ source, validates });

  console.log("error in Textfield", error);
  return (
    <div>
      <div style={{ display: "flex", gridGap: "8px" }}>
        <label htmlFor={source}>{label}</label>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          name={source}
          type={type}
          placeholder={placeholder}
          onKeyUp={emailCheck}
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default TextField;
