import sUsList from "./UsersList.module.css";
import React from "react";
import {OneUserType} from "../../Types";
import {User} from "./User";

export type UsersListPropsType = {
    arr: OneUserType[]
    totalUsers: number
    onClickHandler: (userID: number) => void
    showMoreForFC: () => void
}


export const UsersList = (props: UsersListPropsType) => {

    const onClickHandler = (userID: number) => props.onClickHandler(userID)

    const mappedUsers = props.arr.map((e, i) =>
        <User
        userID={e.id}
        key={i}
        name={e.name}
        status={e.status}
        followed={e.followed}
        photos={e.photos}
        onClickHandler={onClickHandler}

    />)


    return (
        <div className={sUsList.mainWrapper}>
            <div>{props.totalUsers}</div>
            {mappedUsers}
            <div>{props.arr.length} users displayed</div>
            <button className={sUsList.showMoreB} onClick={props.showMoreForFC}>SHOW MORE</button>
        </div>
    )
}

