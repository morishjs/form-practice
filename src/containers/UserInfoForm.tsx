import SimpleForm from "../components/SimpleForm";
import TextField from "../components/TextField";
import {max, min} from "../validations";

function UserInfoForm(): JSX.Element {
    return (
        <SimpleForm>
            <TextField source={'name'} label={'이름'} validates={[min(2), max(4)]}/>
            <TextField type='password' source={'password'} label={'비밀번호'} validates={[]}/>
        </SimpleForm>
    );
}

export default UserInfoForm;
