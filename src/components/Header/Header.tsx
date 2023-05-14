import s from './Header.module.css'
import Button from 'react-bootstrap/Button';


export type HeaderPropsType = {
    isAuth: boolean
    userName: string
    isLoading: boolean
    onClickHandler: () => void
}

export const Header = (props: HeaderPropsType) => {

    return (
        <div className={s.mainWrapper}>

            <div>Header</div>

            <span>{props.isAuth ? props.userName : ''}</span>

            {props.isAuth &&
                <Button
                    variant="light"
                    onClick={props.onClickHandler}
                    disabled={props.isLoading}>Sign out</Button>}
        </div>)
}