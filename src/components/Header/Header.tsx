import s from './Header.module.css'

export type HeaderPropsType = {
    isAuth:boolean
    userName:string
}

export const Header = (props:HeaderPropsType) => {


    return <div className={s.mainWrapper}>
        <div>Header</div>

        <span>{props.isAuth?props.userName:''}</span> <button>{props.isAuth?'LOGOUT':'LOGIN'}</button>

    </div>
}