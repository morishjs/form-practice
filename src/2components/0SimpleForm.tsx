import {
  createContext,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";

//context API 생성
export const FormContext = createContext({
  setValues: (v: any) => {},
  values: {} as Record<string, any>,
  setError: (message: Record<string, string>) => {},
  error: {} as Record<string, any>,
});

const SimpleForm = ({ children }: PropsWithChildren<{}>) => {
  const [values, setValues] = useState({});
  const [error, setError] = useState({});
  console.log("🚀 ~ file: 0SimpleForm.tsx:14 ~ SimpleForm ~ error:", error);

  const [isDisabled, setIsDisabled] = useState(false);
  //초기값을 {}로 세팅했는데 그냥 ''로 출력되는 이유? -> 객체를 깠으니까

  const value = useMemo(
    () => ({ setValues, values, setError, error }),
    [setValues, values, setError, error]
  );

  const onClick = (e: any) => {
    if (error) {
      return;
    } else e.preventDefault();
  };

  //try1.에러가 아닐때도 경고창이 나와서 error메세지 존재여부로 하는건 안됨
  useEffect(() => {
    const hasError = Object.values(error).some((e) => !!e);
    const hasEmptyInput = Object.values(values).some((v) => v === "");

    setIsDisabled(hasError || hasEmptyInput);
  }, [values, error]);

  //try2.min(), max()의 argument의 길이를 비교해서 제출버튼 비활성화

  //contextAPI를 감싸기. 그 자식은 모두 FormContext에 접근가능
  //왜 ...value지웠는지 생각해보기
  return (
    <FormContext.Provider value={value}>
      <form>
        {children}
        <button type={"submit"} onClick={onClick} disabled={isDisabled}>
          제출
        </button>
      </form>
    </FormContext.Provider>
  );
};

export default SimpleForm;
