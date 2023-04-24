import {UsersReducer, UserStateType} from "../Redux/Reducers/UsersReducer";

test('to follow', () => {

    const startState: UserStateType = {
        usersReceivedStatus: false,
        totalUsers:0,
        pageNumbers:1,
        usersAreLoading: [],
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


    const endState = UsersReducer(startState, {type: 'FOLLOW', payload: {userID: 3}})


    expect(endState.users[2].followed).toBe(true)
})