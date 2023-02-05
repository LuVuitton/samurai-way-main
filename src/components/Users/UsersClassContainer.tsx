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
    setUsers: (receivedUsersArr: OneUserType[], totalUsers: number) => void
    showMoreForCC: () => void
    onClickHandler: (userID: number) => void
}

export class UsersClassContainer extends React.Component<UsersClassContainerType> {

    constructor(props: UsersClassContainerType) { //если все что делает конструктор это super(props), его можно не писать
        super(props);
        console.log('Сconstructor')
    }

    getUsers() {
        console.log('i gonna make zapros')
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=3&page=${this.props.pageNumbers}`)
            .then(response => {
                this.props.setUsers(response.data.items, response.data.totalCount)
                console.log(' i did zapros')
            })
    }

    componentDidMount() {
        this.getUsers()
        console.log('componentDidMount')
    }

    showMoreForFC = () => {
        this.props.showMoreForCC()
        this.getUsers()
    }


    render() {
        console.log('Сrender')

        return <>

            {!this.props.usersReceivedStatus ? <Preloader /> : //прелоадер как условное выражение для всего сожержимого компоненты

                <UsersList
                    showMoreForFC={this.showMoreForFC}
                    totalUsers={this.props.totalUsers}
                    arr={this.props.arr}
                    onClickHandler={this.props.onClickHandler}
                />}
        </>
    }
}




