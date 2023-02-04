import React from "react";
import sUsList from './UsersList.module.css'
import axios from "axios";
import {OneUserType} from "../../Types";


export type UsersListPropsType = {
    arr: OneUserType[]
    pageNumbers: number
    onClickHandler: (userID: number) => void
    setUsers: (receivedUsersArr: OneUserType[]) => void
    showMoreClickHandler: () => void
}

export class UsersList extends React.Component<UsersListPropsType> {

    constructor(props: UsersListPropsType) { //если все что делает конструктор это super(props), его можно не писать
        super(props);
        console.log('Сconstructor')
    }


    getUsers() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=3&page=${this.props.pageNumbers}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    componentDidMount() {
        this.getUsers()
    }

    showMoreClickHandler = () => {
        this.props.showMoreClickHandler()
        this.getUsers()
    }


    render() {
        console.log('Сrender')
        return <div className={sUsList.mainWrapper}>

            {this.props.arr.map((e, i) => {

                const onClickHandler = () => this.props.onClickHandler(e.id)



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
            <div>{this.props.arr.length} users displayed</div>
            <button className={sUsList.showMoreB} onClick={this.showMoreClickHandler}>SHOW MORE</button>

        </div>
    }
}




