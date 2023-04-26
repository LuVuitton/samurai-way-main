import {
    OneUserType,
    UserStateType,
    usersReducer,
    followAC,
    unfollowAC,
    setUsersAC, setUsersAreLoading
} from "../Redux/Reducers/UsersReducer";


describe("usersReducer", () => {
    let initialState: UserStateType;

    beforeEach(() => {
        initialState = {
            users: [
                {
                    followed: false,
                    id: 1,
                    name: "John",
                    photos: { small: null, large: null },
                    status: null,
                    uniqueUrlName: null,
                },
                {
                    followed: true,
                    id: 2,
                    name: "Jane",
                    photos: { small: null, large: null },
                    status: null,
                    uniqueUrlName: null,
                },
            ],
            pageNumbers: 1,
            totalUsers: 2,
            usersReceivedStatus: true,
            usersAreLoading: [],
        };
    });

    it("should follow user", () => {
        const userID = 1;
        const action = followAC(userID);

        const newState = usersReducer(initialState, action);

        expect(newState.users[0].followed).toBeTruthy();
    });

    it("should unfollow user", () => {
        const userID = 2;
        const action = unfollowAC(userID);

        const newState = usersReducer(initialState, action);

        expect(newState.users[1].followed).toBeFalsy();
    });

    it("should set users", () => {
        const receivedUsersArr: OneUserType[] = [
            {
                followed: false,
                id: 3,
                name: "Bob",
                photos: { small: null, large: null },
                status: null,
                uniqueUrlName: null,
            },
            {
                followed: true,
                id: 4,
                name: "Alice",
                photos: { small: null, large: null },
                status: null,
                uniqueUrlName: null,
            },
        ];
        const totalUsers = 4;
        const action = setUsersAC(receivedUsersArr, totalUsers);

        const newState = usersReducer(initialState, action);

        expect(newState.users.length).toBe(4);
        expect(newState.totalUsers).toBe(4);
        expect(newState.pageNumbers).toBe(2);
    });

    it("should set users are loading", () => {
        const userID = 1;
        const isLoading = true;
        const action = setUsersAreLoading(userID, isLoading);

        const newState = usersReducer(initialState, action);

        expect(newState.usersAreLoading).toContain(userID);
    });

    it("should clear users state", () => {
        const action = { type: "users/CLEAR-USERS-STATE" } as const;

        const newState = usersReducer(initialState, action);

        expect(newState.users.length).toBe(0);
        expect(newState.pageNumbers).toBe(1);
    });


});
