const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Have you ever been in Egypt?', likesCount: 4},
        {id: 2, message: 'I was in Cairo a couple of weeks ago', likesCount: 22}
    ],
    newPostText: "mr. samurai"
}
const profileReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case ADD_POST: { // интерфейсные методы, т.е. те, через которые мы взаимодействуем с объектом
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
            // stateCopy.posts = [...state.posts]
            // stateCopy.posts.push(newPost);
            // stateCopy.newPostText = '';
    }
        case UPDATE_NEW_TEXT_POST: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}


export const addPostCreator = () => ({
    type: ADD_POST
})   // круглые скобки обрамляют, т.к. иначе фигурные бы воспринимались как тело стрелочной функции. А на самом деле это фигурные скобки объекта

export const updateNewPostCreator = (text) => ({
    type: UPDATE_NEW_TEXT_POST,
    newText: text
})


export default profileReducer;