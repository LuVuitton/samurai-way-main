import {ActionType,} from "../../Types";
import {v1} from "uuid";

export type UserStateType = {
        id:string,
        avatar: string
        userName: string
        description: string
        subscription: boolean
        place: {
            city: string
            country: string
        }
    }


const usersInitialState: UserStateType[] = [
    {
        id: v1(),
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
        id: v1(),
        userName: 'Oleg',
        avatar: '',
        description: 'here',
        subscription: true,
        place: {
            city: 'Kyiv',
            country: 'Ukraine'
        },

    },
    {
        id: v1(),
        userName: 'Alesha',
        avatar: '',
        description: 'here',
        subscription: true,
        place: {
            city: 'Lviv',
            country: 'Ukraine'
        },
    },
]

export type switchSubStatusACType = ReturnType<typeof switchSubStatusAC>

export const switchSubStatusAC = (userID:string) => {
    return {
        type: 'SWITCH-SUB-STATUS',
        payload: {
            userID
        }
    } as const
}

export const UsersReducer = (state: UserStateType[] = usersInitialState, action: ActionType):UserStateType[] => { //перед стрелкой пишем тип который возвращается
    switch (action.type) {
        case 'SWITCH-SUB-STATUS':
            state.map(e=> e.id === action.payload.userID? {...e, subscription:!e.subscription}:e)
            break;
        case '':
            break;
    }
    return {...state}
}