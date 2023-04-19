import s from './Header.module.css'

export type HeaderPropsType = {
    isAuth:boolean
    userName:string
    isLoading:boolean
}

export const Header = (props:HeaderPropsType) => {

    return <div className={s.mainWrapper}>
        <div>Header</div>

        <span>{props.isAuth?props.userName:''}</span> <button disabled={props.isLoading}>{props.isAuth?'LOGOUT':'LOGIN'}</button>

    </div>
}