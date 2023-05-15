import s from './Header.module.css'
import Button from 'react-bootstrap/Button';


export const Header = (props: HeaderPropsType) => {

    return (
        <div className={s.mainWrapper}>

            {/*<div>Header</div>*/}

            {props.isAuth
                ?<p><span className={s.singedText}> signed in as</span> {props.userName}</p>
            :'Come in'
            }

            {props.isAuth &&
                <Button
                    variant="light"
                    onClick={props.onClickHandler}
                    disabled={props.isLoading}>Sign out</Button>}
        </div>
    )
}


export type HeaderPropsType = {
    isAuth: boolean
    userName: string
    isLoading: boolean
    onClickHandler: () => void
}

