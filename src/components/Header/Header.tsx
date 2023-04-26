import s from './Header.module.css'

export type HeaderPropsType = {
    isAuth:boolean
    userName:string
    isLoading:boolean
    onClickHandler: ()=> void
}

export const Header = (props:HeaderPropsType) => {

    return <div className={s.mainWrapper}>
        <div>Header</div>

        <span>{props.isAuth?props.userName:''}</span> <button onClick={props.onClickHandler} disabled={props.isLoading}>{props.isAuth?'LOGOUT':'LOGIN'}</button>

    </div>
}