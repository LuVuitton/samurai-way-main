import {OneUserType} from "../../Redux/Reducers/UsersReducer";
import sUsList from './UsersList.module.css'


export type UsersListPropsType = {
    arr: OneUserType[]
    onClickHandler: (userID: number) => void
}


export const UsersList = (props: UsersListPropsType) => {

    return <div className={sUsList.mainWrapper}>

        {props.arr.map((e, i) => {

            const onClickHandler = () => props.onClickHandler(e.id)

            return <div className={sUsList.itemWrapper} key={i}>
                <div>
                <div className={sUsList.avatar}>avatar</div>
                <button
                    className={e.subscription? sUsList.subscriptionActive:sUsList.subscription}
                    onClick={onClickHandler}> {e.subscription ? 'follow' : 'unfollow'}
                </button>
                </div>

               <div>
                   <div className={sUsList.userName}>{e.userName}</div>
                   <div className={sUsList.description}>{e.description}</div>
               </div>

                <div>
                <div className={sUsList.city}> {e.place.city}</div>
                <div className={sUsList.country}>{e.place.country}</div>
                </div>

            </div>
        })
        }
    </div>

}