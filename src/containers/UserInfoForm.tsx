import SimpleForm from "../components/SimpleForm";
import TextField from "../components/TextField";
import { max, min } from "../validations";

function UserInfoForm(): JSX.Element {

  const emailCheck = (event: any) => {
    if (event.target.value.length < 4) {
      console.log(event.target.value);
      event.target.nextSibling.textContent = "3자 이상 써주세요";
    } else {
      event.target.nextSibling.textContent = "";
    }
  };



  return (
    <SimpleForm>
      <TextField
        emailCheck={emailCheck}
        source={"name"}
        label={"이름"}
        validates={[min(2), max(4)]}
        //
      />
      <label></label>
      <TextField
        type="password"
        source={"password"}
        label={"비밀번호"}
        validates={[min(4), max(8)]}
        //
      />
      <label></label>
    </SimpleForm>
  );
}

export default UserInfoForm;
