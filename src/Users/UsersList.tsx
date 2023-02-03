import {OneUserType} from "../Redux/Reducers/UsersReducer";
import sUsList from './UsersList.module.css'


export type UsersListPropsType = {
    arr: OneUserType[]
    onClickHandler: (userID: number) => void
}


export const UsersList = (props: UsersListPropsType) => {

    return <div>

        {props.arr.map((e, i) => {

            const onClickHandler = () => props.onClickHandler(e.id)

            return <div key={i}>
                <div>avatar</div>
                <div>{e.place.city}</div>
                <div>{e.place.country}</div>
                <div>{e.userName}</div>
                <div>{e.description}</div>
                <div>
                    <button onClick={onClickHandler}> {e.subscription ? 'follow' : 'unfollow'}</button>
                </div>
            </div>
        })
        }
    </div>

}