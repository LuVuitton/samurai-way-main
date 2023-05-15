import {Field, reduxForm} from "redux-form";
import {CheckForm, InputForm, PasswordForm} from "../../formControls/formControls";
import {maxLengthCreator, required} from "../../formControls/validators";
import s from '../../formControls/formControls.module.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';




const maxLength50 = maxLengthCreator(50)

export const Login = (props: any) => {
    return (
        <div className={s.mainWrapper}>

            <Form onSubmit={props.handleSubmit}>
                <h3>Login</h3>
                <div><Field type="text" placeholder={'email'} component={InputForm} name={'email'} validate={[required,
                    maxLength50]}/></div>
                <div><Field type="password" component={PasswordForm} name={'password'}
                            validate={[required]}/></div>
                <div><Field component={CheckForm} name={'rememberMe'} label={'Remember me'}/></div>
                <div className={s.btn}>
                    <Button variant="light" type="submit">
                        LOGIN
                    </Button>
                </div>
                {props.error && <div className={s.commonError}>{props.error}</div>}

                <Alert variant={'success'} style={{maxWidth:'400px'}}>
                    <><p>get registered or use common <b>test</b> account credentials:</p>
                        <br/>
                        <p><b>Email:</b> free@samuraijs.com</p>
                        <p><b>Password:</b> free</p></>
                </Alert>
            </Form>
        </div>
    )
}

//пропсы для Login в типизацию функции вторм параетром
export const LoginReduxForm = reduxForm({
    form: 'login'
})(Login)




