import s from './formControls.module.css'
import {Field} from "redux-form";


export const InputForm = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError? s.error: '')}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span>{hasError}</span>}
        </div>
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