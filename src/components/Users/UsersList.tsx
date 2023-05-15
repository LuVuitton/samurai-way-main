import s from "./UsersList.module.css";
import React from "react";
import {User} from "./User";
import {OneUserType} from "../../Redux/Reducers/UsersReducer";
import Button from 'react-bootstrap/Button';


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
        <div className={s.mainWrapper}>
            <div className={s.textTotal}>Total registered {props.totalUsers} users</div>
            {mappedUsers}
            <div className={s.textTotal}>{props.arr.length} users have been displayed</div>
            <div className={s.btnWrapper}>
                <Button variant="light" disabled={props.isLoading} className={s.btn} onClick={props.showMore}>SHOW
                    MORE</Button>
            </div>
        </div>
    )
}

export type UsersListPropsType = {
    arr: OneUserType[]
    totalUsers: number
    showMore: () => void
    isLoading: boolean
    setIsLoadingAC: (isLoading: boolean) => void
    usersAreLoading: number[]
    onFollowTC: (userID: number) => void
    onUnfollowTC: (userID: number) => void
}
