import sUsList from "./UsersList.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../DAL/UsersAPI";

export type UserPropsType = {
    photos: { small: string | null; large: string | null; }
    followed: boolean
    onClickHandler: (userID: number) => void
    name: string
    status: string | null
    userID: number
    usersAreLoading: number[]
    setUsersAreLoading:(userID:number, isLoading:boolean)=>void

}


export const User = ({
                         photos,
                         followed,
                         onClickHandler,
                         name,
                         status,
                         userID,
                         usersAreLoading,
                         setUsersAreLoading
                     }: UserPropsType) => {

    const onFollowHandler = () => {
        setUsersAreLoading( userID,true)
        usersAPI.follow(userID)
            .then(r => {
                if (r.resultCode === 0) {
                    onClickHandler(userID)
                }
            })
            .finally(() => {
                setUsersAreLoading( userID,false)

            })

    }

    const onUnfollowHandler = () => {
        setUsersAreLoading( userID,true)
        usersAPI.unFollow(userID)
            .then(r => {
                if (r.resultCode === 0) {
                    onClickHandler(userID)
                }
            })
            .finally(() => {
                setUsersAreLoading( userID,false)
            })
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
                        disabled={usersAreLoading.some(e=>e===userID)}
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