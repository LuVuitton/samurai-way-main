import s from './formControls.module.css'
import {Field} from "redux-form";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const InputForm = ({input, meta, size, ...props}: any) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + ' ' + (hasError? s.error: '')}>
            <div>
            {/*{hasError && <span>{hasError}</span>}*/}
                {/*<input    {...input} {...props} />*/}
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">email</InputGroup.Text>
                    <Form.Control
                        placeholder={hasError? hasError: 'email'}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        className={s.formControlInput}
                        autoComplete="username"
                        {...input} {...props}
                    />
                </InputGroup>
            </div>
        </div>
    )
}

export const PasswordForm = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + ' ' + (hasError? s.error: '')}>
            <div>
                {/*<input    {...input} {...props} />*/}
                {/*{hasError && <span>{hasError}</span>}*/}
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">pass</InputGroup.Text>
                    <Form.Control
                        placeholder={hasError? hasError: 'password'}
                        aria-label="password"
                        aria-describedby="basic-addon1"
                        autoComplete="current-password"
                        {...input} {...props}

                    />
                </InputGroup>
            </div>

        </div>
    )
}

export const CheckForm = ({input, meta, ...props}: any) => {
    // const hasError = meta.touched && meta.error;

    return (

            <Form.Check
                type="switch"
                id="custom-switch"
                label="Remember ME"
                {...input} {...props}
            />

    )
}

export const TextAreaForm = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError? s.error: '')}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span>{hasError}</span>}
        </div>
    )
}

export const createField = (placeholder:string, name:string, validators: Function[], component:any, props:any ={}, text='') => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
)