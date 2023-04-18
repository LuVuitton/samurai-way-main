import React from "react";
import axios from "axios";
import {OneUserType} from "../../Types";
import {UsersList} from "./UsersList";
import {Preloader} from "../Other/Preloader";


export type UsersClassContainerType = {
    arr: OneUserType[]
    pageNumbers: number
    usersReceivedStatus: boolean
    totalUsers: number
    setUsersAC: (receivedUsersArr: OneUserType[], totalUsers: number) => void
    showMoreAC: () => void
    switchSubStatusAC: (userID: number) => void
}

export class UsersClassContainer extends React.Component<UsersClassContainerType> {

    constructor(props: UsersClassContainerType) { //если все что делает конструктор это super(props), его можно не писать
        super(props);
    }

    getUsers() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=3&page=${this.props.pageNumbers}`)
            .then(response => {
                this.props.setUsersAC(response.data.items, response.data.totalCount)
            })
    }

    componentDidMount() {
        this.getUsers()
    }

    showMoreForFC = () => {
        this.props.showMoreAC()
        this.getUsers()
    }


    render() {

        return <>

            {!this.props.usersReceivedStatus ? <Preloader /> : //прелоадер как условное выражение для всего сожержимого компоненты

                <UsersList
                    showMoreForFC={this.showMoreForFC}
                    totalUsers={this.props.totalUsers}
                    arr={this.props.arr}
                    onClickHandler={this.props.switchSubStatusAC}
                />}
        </>
    }
}




