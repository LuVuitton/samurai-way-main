import sUsList from "./UsersList.module.css";
import React, {useState} from "react";
import {OneUserType} from "../../Types";

export type UsersListPropsType = {
    arr: OneUserType[]
    totalUsers: number
    onClickHandler: (userID: number) => void
    showMoreForFC: () => void

}


export const UsersList = (props: UsersListPropsType) => {
    console.log('FC render')


    return <div className={sUsList.mainWrapper}>
        <div>{props.totalUsers}</div>


        {props.arr.map((e, i) => {

            const onClickHandler = () => props.onClickHandler(e.id)


            return <div className={sUsList.itemWrapper} key={i}>

                <div>
                    {/*если есть фото прочти у него смол и дальше*/}
                    <img className={sUsList.avatar}
                         src={e.photos?.small ? e.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbd87QavjazVx5tJ9sLdp_p2oqfGoN1KUjw&usqp=CAU'}></img>
                    <button
                        className={e.followed ? sUsList.subscriptionActive : sUsList.subscription}
                        onClick={onClickHandler}> {e.followed ? 'follow' : 'unfollow'}
                    </button>
                </div>

                <div>
                    <div className={sUsList.userName}>{e.name}</div>
                    <div className={sUsList.description}>{e.status}</div>
                </div>

            </div>
        })
        }
        <div>{props.arr.length} users displayed</div>
        <button className={sUsList.showMoreB} onClick={props.showMoreForFC}>SHOW MORE</button>

    </div>
}
