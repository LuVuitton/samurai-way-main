import s from './Header.module.css'
import {BurgerMenu} from "../BurgerMenu/BurgerMenu";
import Button from 'react-bootstrap/Button';


export const Header = (props: HeaderPropsType) => {

    return (
        <div className={s.mainWrapper}>
            {props.isAuth
                ? <p><span className={s.singedText}> signed in as</span> {props.userName}</p>
                : 'Come in'
            }

            {props.isAuth &&
                <>
                    <div className={s.btnWrapper}>
                        <Button
                            variant="light"
                            onClick={props.onClickHandler}
                            disabled={props.isLoading}>Sign out
                        </Button>
                    </div>
                    <div className={s.burgerMenuWrapper}>
                        <BurgerMenu signOutHandler={props.onClickHandler}/>
                    </div>
                </>
            }
        </div>
    )
}


export type HeaderPropsType = {
    isAuth: boolean
    userName: string
    isLoading: boolean
    onClickHandler: () => void
}

