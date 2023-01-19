import React, { FunctionComponent } from "react";
import { InputProps } from "../types/InputProps";
import useInput from "../hooks/useInput";

const TextField: FunctionComponent<InputProps> = ({
  validates,
  source,
  label,
  placeholder,
  type,
}) => {
  const { value, onChange, error } = useInput({ source, validates });
  //useInput에 source를 넣고 계산 후 return 된 값을 쓰기 위함
  //const props = useInput({source, validate})
  //const value = props.value
  //const onChange = props.onChange

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
          onKeyUp={this.emailCheck}
        />
      </div>
    </div>
  );
};

export default TextField;
