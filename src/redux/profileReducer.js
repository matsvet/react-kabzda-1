import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Have you ever been in Egypt?', likesCount: 4},
        {id: 2, message: 'I was in Cairo a couple of weeks ago', likesCount: 22}
    ],
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: { // интерфейсные методы, т.е. те, через которые мы взаимодействуем с объектом
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
            // stateCopy.posts = [...state.posts]
            // stateCopy.posts.push(newPost);
            // stateCopy.newPostText = '';
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
}

export const addPostAC = (newPostText) => ({type: ADD_POST, newPostText})   // круглые скобки обрамляют, т.к. иначе фигурные бы воспринимались как тело стрелочной функции. А на самом деле это фигурные скобки объекта
export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatusAC = (status) => ({type: SET_STATUS, status})

export const getUserProfileTC = (profileId) => (dispatch) => {
    usersAPI.getProfile(profileId).then(data => {
        dispatch(setUserProfileAC(data))
    })
}
export const getStatusTC = (profileId) => (dispatch) => {
    profileAPI.getStatus(profileId).then(data => {
        dispatch(setStatusAC(data))
    })
}
export const updateStatusTC = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatusAC(status))
        }
    })
}

export default profileReducer;