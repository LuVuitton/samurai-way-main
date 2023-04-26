import s from './formControls.module.css'


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