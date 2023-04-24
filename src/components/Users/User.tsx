import sUsList from "./UsersList.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

export type UserPropsType = {
    photos: { small: string | null; large: string | null; }
    followed: boolean
    name: string
    status: string | null
    userID: number
    usersAreLoading: number[]
    onFollowTC: (userID: number) => void
    onUnfollowTC: (userID: number) => void
}


export const User = ({
                         photos,
                         followed,
                         name,
                         status,
                         userID,
                         usersAreLoading,
                         onFollowTC,
                         onUnfollowTC
                     }: UserPropsType) => {

    const onFollowHandler = () => {
        onFollowTC(userID)
    }

    const onUnfollowHandler = () => {
        onUnfollowTC(userID)
    }


    return (
        <>
            <div className={sUsList.itemWrapper}>
                <div>
                    <NavLink to={`/profile/${userID}`}>
                        <img
                            className={sUsList.avatar}
                            alt={'avatar'}
                            src={
                                photos?.small
                                    ? photos.small
                                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbd87QavjazVx5tJ9sLdp_p2oqfGoN1KUjw&usqp=CAU'
                            }
                        ></img>
                    </NavLink>
                    <button
                        disabled={usersAreLoading.some(e => e === userID)}
                        className={followed ? sUsList.subscriptionActive : sUsList.subscription}
                        onClick={followed ? onUnfollowHandler : onFollowHandler}
                    >
                        {followed ? 'unfollow' : 'follow'}
                    </button>
                </div>
                <div>
                    <div className={sUsList.userName}>{name}</div>
                    <div className={sUsList.description}>{status}</div>
                </div>
            </div>
        </>
    );
};