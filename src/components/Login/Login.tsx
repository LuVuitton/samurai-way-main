import {Field, reduxForm} from "redux-form";
import {InputForm} from "../../formControls/formControls";
import {maxLengthCreator, required} from "../../formControls/validators";
import s from '../../formControls/formControls.module.css'

const maxLength50 = maxLengthCreator(50)

export const Login = (props:any) => {
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={'name'} type="text" component={InputForm} name={'email'} validate={[required,
                    maxLength50]}/></div>
                <div><Field placeholder={'password'} type="password" component={InputForm} name={'password'} validate={[required]}/></div>
                <div><Field type="checkbox" component={'input'} name={'rememberMe'}/>  remember me</div>
                <div><button>LOGIN</button></div>
                {props.error && <div className={s.commonError}>{props.error}</div>}
            </form>
        </>
    )
}


export const LoginReduxForm = reduxForm({
    form: 'login'
})(Login)