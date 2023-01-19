import { createContext, PropsWithChildren, useMemo, useState } from "react";

export const FormContext = createContext({
  setValues: (v: any) => {},
  values: {} as Record<string, any>,
  setError: (v: any) => {},
  error: {} as Record<string, any>,
});

const SimpleForm = ({ children }: PropsWithChildren<{}>) => {
  const [values, setValues] = useState({});
  const value = useMemo(() => ({ setValues, values }), [setValues, values]);

  // const[error,setError] = useState(false)

  console.log("========");
  console.log("value", value);
  console.log("values", values);

  const onClick = (e: any) => {
    e.preventDefault();
    // alert(JSON.stringify(values));
  };

  return (
    <FormContext.Provider value={value}>
      <form>
        {children}
        <button type={"submit"} onClick={onClick}>
          제출
        </button>
      </form>
    </FormContext.Provider>
  );
};

export default SimpleForm;
