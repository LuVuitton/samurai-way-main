import sUsList from "./UsersList.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

export type UserPropsType = {
    photos: { small: string | null; large: string | null; }
    followed: boolean
    onClickHandler: (userID: number) => void
    name: string
    status: string | null
    userID: number
}

export const User = ({photos, followed, onClickHandler, name, status, userID}: UserPropsType) => {
    return (
        <>
            <div className={sUsList.itemWrapper}>
                <div>
                    {/*если есть фото прочти у него смол и дальше*/}
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
                        className={
                            followed ? sUsList.subscriptionActive : sUsList.subscription
                        }
                        onClick={() => onClickHandler(userID)}
                    >
                        {followed ? 'follow' : 'unfollow'}
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