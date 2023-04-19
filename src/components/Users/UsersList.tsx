import sUsList from "./UsersList.module.css";
import React from "react";
import {User} from "./User";
import {OneUserType} from "../../Redux/Reducers/UsersReducer";

export type UsersListPropsType = {
    arr: OneUserType[]
    totalUsers: number
    onClickHandler: (userID: number) => void
    showMoreForFC: () => void
    isLoading:boolean
    setIsLoadingAC:(isLoading:boolean)=>void
    usersAreLoading:number[]
    setUsersAreLoading:(userID:number, isLoading:boolean)=>void

}


export const UsersList = (props: UsersListPropsType) => {

    const onClickHandler = (userID: number) => props.onClickHandler(userID)

    const mappedUsers = props.arr.map((e, i) =>{
     return   <User
        userID={e.id}
        key={i}
        name={e.name}
        status={e.status}
        followed={e.followed}
        photos={e.photos}
        onClickHandler={onClickHandler}
        usersAreLoading={props.usersAreLoading}
        setUsersAreLoading={props.setUsersAreLoading}

    />
    })

    return (
        <div className={sUsList.mainWrapper}>
            <div>{props.totalUsers}</div>
            {mappedUsers}
            <div>{props.arr.length} users displayed</div>
            <button disabled={props.isLoading} className={sUsList.showMoreB} onClick={props.showMoreForFC}>SHOW MORE</button>
        </div>
    )
}

