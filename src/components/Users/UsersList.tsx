import sUsList from "./UsersList.module.css";
import React from "react";
import {User} from "./User";
import {OneUserType} from "../../Redux/Reducers/UsersReducer";

export type UsersListPropsType = {
    arr: OneUserType[]
    totalUsers: number
    showMore: () => void
    isLoading: boolean
    setIsLoadingAC: (isLoading: boolean) => void
    usersAreLoading: number[]
    onFollowTC:(userID:number)=>void
    onUnfollowTC:(userID:number)=>void
}


export const UsersList = (props: UsersListPropsType) => {


    const mappedUsers = props.arr.map((e, i) => {
        return <User
            userID={e.id}
            key={i}
            name={e.name}
            status={e.status}
            followed={e.followed}
            photos={e.photos}
            usersAreLoading={props.usersAreLoading}
            onFollowTC={props.onFollowTC}
            onUnfollowTC={props.onUnfollowTC}
        />
    })

    return (
        <div className={sUsList.mainWrapper}>
            <div>{props.totalUsers}</div>
            {mappedUsers}
            <div>{props.arr.length} users displayed</div>
            <button disabled={props.isLoading} className={sUsList.showMoreB} onClick={props.showMore}>SHOW MORE</button>
        </div>
    )
}

