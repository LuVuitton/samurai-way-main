import {UsersReducer} from "../Redux/Reducers/UsersReducer";
import {UserStateType} from "../Types";

test('to switch subStatus', () => {

    const startState: UserStateType = {
        pageNumbers:1,
        users: [
            {
                id: 1,
                name: 'Stasic',
                photos: {
                    small: null,
                    large: null,
                },
                status: 'here',
                followed: false,
                uniqueUrlName: null
            },
            {
                id: 2,
                name: 'Jora',
                photos: {
                    small: null,
                    large: null,
                },
                status: 'here',
                followed: false,
                uniqueUrlName: null
            },
            {
                id: 3,
                name: 'Maksim',
                photos: {
                    small: null,
                    large: null,
                },
                status: 'here',
                followed: false,
                uniqueUrlName: null
            },
        ]
    }


    const endState = UsersReducer(startState, {type: 'SWITCH-SUB-STATUS', payload: {userID: 3}})


    expect(endState.users[2].followed).toBe(true)
})