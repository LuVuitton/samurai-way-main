import {UsersReducer, UserStateType} from "../Redux/Reducers/UsersReducer";

test('to switch subStatus', ()=> {

    const startState: UserStateType = {
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
                description: 'here',
                subscription: true,
                place: {
                    city: 'Kyiv',
                    country: 'Ukraine'
                },

            },
            {
                id: 3,
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
    }



    const endState = UsersReducer(startState, {type:'SWITCH-SUB-STATUS', payload:{userID: 3}})


    expect(endState.users[2].subscription).toBe(false)
})