import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const CHANGE_FETCHING = 'CHANGE_FETCHING'
const CHANGE_FOLLOWING_IN_PROGRESS = 'CHANGE_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    isFollowingInProgress: false,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: [...state.users] === users: state.users.map(u => u)
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true} // возвращаем копию того объекта-юзера, который хотим изменить, с измененном isFollowed
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                // users: [...state.users] === users: state.users.map(u => u)
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false} // возвращаем копию того объекта-юзера, который хотим изменить, с измененном isFollowed
                    }
                    return u;
                })
            }
        case SET_USERS:
            // return {...state, users: [...state.users, ...action.users]} // дописывает новых юзеров в конец юзеров
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case CHANGE_FETCHING:
            return {...state, isFetching: action.isFetching}
        case CHANGE_FOLLOWING_IN_PROGRESS:
            return {...state,
                followingInProgress: action.isFollowingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({
    type: FOLLOW,
    userId
})
export const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId
})
export const setUsersAC = (users) => ({
    type: SET_USERS,
    users
})
export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})
export const setUsersTotalCountAC = (totalCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
})
export const changeFetchingAC = (isFetching) => ({
    type: CHANGE_FETCHING,
    isFetching
})
export const changeFollowingInProgressAC = (isFollowingInProgress, userId) => ({
    type: CHANGE_FOLLOWING_IN_PROGRESS,
    isFollowingInProgress,
    userId
})

export const getUsersTC = (currentPage, pageSize) => (dispatch) => {
    dispatch(changeFetchingAC(true))
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setUsersAC(data.items))
        dispatch(setUsersTotalCountAC(data.totalCount))
        dispatch(changeFetchingAC(false))
    })
}
export const followTC = (userId) => (dispatch) => {
    dispatch(changeFollowingInProgressAC(true, userId))
    usersAPI.follow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followAC(userId))
            }
            dispatch(changeFollowingInProgressAC(false, userId))
        })
}

export const unfollowTC = (userId) => (dispatch) => {
    dispatch(changeFollowingInProgressAC(true, userId))
    usersAPI.unfollow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowAC(userId))
            }
            dispatch(changeFollowingInProgressAC(false, userId))
        })
}


export default userReducer;