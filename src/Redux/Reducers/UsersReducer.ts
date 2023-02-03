import {ActionType,} from "../../Types";

export type UserStateType = {
    users: OneUserType[]
}

export type OneUserType = {

    id: number,
    avatar: string
    userName: string
    description: string
    subscription: boolean
    place: {
        city: string
        country: string
    }
}


const usersInitialState: UserStateType = {

    users: [
        {
            id: 1,
            userName: 'Stasic',
            avatar: '',
            description: 'here',
            subscription: false,
            place: {
                city: 'Kharkiv',
                country: 'Ukraine'
            },

        },
        {
            id: 2,
            userName: 'Oleg',
            avatar: '',
            description: 'asdaslkdjalskjdlaksjd',
            subscription: true,
            place: {
                city: 'Kyiv',
                country: 'Ukraine'
            },

        },
        {
            id: 3,
            userName: 'Jora',
            avatar: '',
            description: 'here',
            subscription: true,
            place: {
                city: 'London',
                country: 'UK'
            },
        },  {
            id: 4,
            userName: 'Masha',
            avatar: '',
            description: 'here',
            subscription: false,
            place: {
                city: 'NewYork',
                country: 'USA'
            },
        }, {
            id: 5,
            userName: 'Dima',
            avatar: '',
            description: 'adlaksjdlaksjdlaksjdlalksdjlaksdj',
            subscription: false,
            place: {
                city: 'Milan',
                country: 'Italy'
            },
        },
    ]
}


export type switchSubStatusACType = ReturnType<typeof switchSubStatusAC>

export const switchSubStatusAC = (userID: number) => {
    return {
        type: 'SWITCH-SUB-STATUS',
        payload: {
            userID
        }
    } as const
}

export const UsersReducer = (state: UserStateType = usersInitialState, action: switchSubStatusACType): UserStateType => { //перед стрелкой пишем тип который возвращается

    switch (action.type) {
        case 'SWITCH-SUB-STATUS':
            return {...state,
                users: state.users.map(e => e.id === action.payload.userID ? {...e, subscription: !e.subscription} : e)}
            break;
    }
    return state
}