import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USERS'

let initialState = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.data !== undefined,
                }
        default:
            return state;
    }
}

export const setAuthUserDataAC = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})

export const getAuthUserDataTC = () => (dispatch) => {
    authAPI.getAuth()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserDataAC(id, email, login))
            }
        })
}
export default authReducer;