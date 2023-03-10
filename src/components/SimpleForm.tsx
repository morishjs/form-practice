import { createContext, PropsWithChildren, useMemo, useState } from "react";

export const FormContext = createContext({
  setValues: (v: any) => {},
  values: {} as Record<string, any>,
  setError: (source: string, message: string) => {},
  error: {} as Record<string, any>,
});

const SimpleForm = ({ children }: PropsWithChildren<{}>) => {
  const [values, setValues] = useState({});
  const [error, setError] = useState({});

  const value = useMemo(
    () => ({ setValues, values, setError, error }),
    [setValues, values, setError, error]
  );

  const onClick = (e: any) => {
    e.preventDefault();
    alert(JSON.stringify(values));
  };

  return (
    <FormContext.Provider value={{ ...value, setError }}>
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
