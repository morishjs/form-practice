import { InputProps } from "../types/InputProps";
import React, { useCallback, useContext } from "react";
import { FormContext } from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, "source" | "validates"> {}

function useInput(props: UseInputProps) {
  const { setValues, values, setError, error } = useContext(FormContext);

  const onChange = useCallback(
    (v: string | number) => {
      //[min(5), max(10)]
      let error = null;
      //func는 min or max
      props.validates.forEach((func) => {
        error = func(v);
        console.log("error in UseInput", error);

        if (error) {
          setError(props.source, error);
        }
      });

      setValues({
        ...values,
        [props.source]: v,
      });
    },
    [values, props.source, props.validates, setError, setValues]
  );

  return {
    value: values[props.source],
    onChange,
    error: error[props.source],
  };
}

export default useInput;
