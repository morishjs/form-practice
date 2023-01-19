import { InputProps } from "../types/InputProps";
import React, { useCallback, useContext } from "react";
import { FormContext } from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, "source" | "validates"> {}

function useInput(props: UseInputProps) {
  const { setValues, values, setError, error } = useContext(FormContext);
  const onChange = useCallback(
    (v: string | number) => {
      //[min(5), max(10)]
      props.validates.forEach((func) => {
        const error = func(v);

        if (error) {
          return alert(error);
        }
      });
      setValues({
        ...values,
        [props.source]: v,
      });
    },
    [values, props.source]
  );

  return {
    value: values[props.source],
    onChange,
    // error
  };
}

export default useInput;
