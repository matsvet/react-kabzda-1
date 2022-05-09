import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USERS'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                // isAuth: action.payload.isAuth, // or isAuth: true (??)
                }
        default:
            return state;
    }
}

export const setAuthUserDataAC = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export const getAuthUserDataTC = () => (dispatch) => {
    return authAPI.getAuth()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserDataAC(id, email, login, true))
            }
                // else {
            //     debugger
            //     let message = data.messages.length > 0 ? data.messages[0] : "Some error"
            //     dispatch(stopSubmit("login", {_error: message}))
            // }
        })
}

export const loginTC = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserDataTC())
            } else {
                debugger
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
}

export const logoutTC = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false))
            }
        })
}

export default authReducer;