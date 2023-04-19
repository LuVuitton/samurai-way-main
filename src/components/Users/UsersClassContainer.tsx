import React from "react";
import {UsersList} from "./UsersList";
import {Preloader} from "../Other/Preloader";
import {OneUserType} from "../../Redux/Reducers/UsersReducer";
import {usersAPI} from "../../DAL/UsersAPI";


export type UsersClassContainerType = {
    arr: OneUserType[]
    pageNumbers: number
    usersReceivedStatus: boolean
    totalUsers: number
    setUsersAC: (receivedUsersArr: OneUserType[], totalUsers: number) => void
    showMoreAC: () => void
    switchSubStatusAC: (userID: number) => void
    clearUsersState: () => void
    isLoading: boolean
    setIsLoadingAC:(isLoading:boolean)=> void
    usersAreLoading:number[]
    setUsersAreLoading:(userID:number, isLoading:boolean)=>void
}

export class UsersClassContainer extends React.Component<UsersClassContainerType> {

    constructor(props: UsersClassContainerType) { //если все что делает конструктор это super(props), его можно не писать
        super(props);
    }


    componentDidMount() {
        this.props.setIsLoadingAC(true)
        usersAPI.getUsers(this.props.pageNumbers)
            .then(r => {
                this.props.setUsersAC(r.items, r.totalCount)
            })
            .finally(() => {
                this.props.setIsLoadingAC(false)
            })
    }

    showMoreForFC = () => {
        this.props.showMoreAC()
        this.props.setIsLoadingAC(true)

        usersAPI.getUsers(this.props.pageNumbers)
            .then(r => {
                this.props.setUsersAC(r.items, r.totalCount)
            })
            .finally(() => {
                this.props.setIsLoadingAC(false)
            })
    }

    componentWillUnmount() {
        this.props.clearUsersState()
    }


    render() {

        return <>

            {!this.props.usersReceivedStatus ? <Preloader/> : //прелоадер как условное выражение для всего сожержимого компоненты
                <UsersList
                    showMoreForFC={this.showMoreForFC}
                    totalUsers={this.props.totalUsers}
                    arr={this.props.arr}
                    onClickHandler={this.props.switchSubStatusAC}
                    isLoading={this.props.isLoading}
                    setIsLoadingAC={this.props.setIsLoadingAC}
                    usersAreLoading={this.props.usersAreLoading}
                    setUsersAreLoading={this.props.setUsersAreLoading}
                />}
        </>
    }
}




