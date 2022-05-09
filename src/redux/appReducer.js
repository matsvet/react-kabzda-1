import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserDataTC} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    isInitialized: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccessAC = () => ({type: INITIALIZED_SUCCESS, })

export const initializeAppTC = () => (dispatch) => {
    dispatch(getAuthUserDataTC())
        .then(() => {
            dispatch(initializedSuccessAC())
        })
}


export default authReducer;