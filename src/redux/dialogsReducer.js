const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Yo-yo'},
        {id: 2, message: 'Man'},
        {id: 3, message: 'Hooli'},
        {id: 4, message: 'Grusteam'},
    ],
    dialogs: [
        {id: 0, name: 'Me'},
        {id: 1, name: 'Mashka'},
        {id: 2, name: 'Lenka'},
        {id: 3, name: 'Dashka'},
        {id: 4, name: 'Pashka'},
        {id: 5, name: 'Mishka'},
        {id: 6, name: 'Sashka'}
    ],
    newMessageText: "",
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages, {   // забираем старые элементы
                        id: 11,
                        message: state.newMessageText
                    }  // добавляем новый элемент в конец вместо пуш
                ],
                newMessageText: ''
            };
            // stateCopy.messages.push(newMessage);
            // stateCopy.newMessageText = '';
        case UPDATE_NEW_TEXT_MESSAGE:
            return  {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})

export const updateNewMessageCreator = (text) => ({
    type: UPDATE_NEW_TEXT_MESSAGE,
    newText: text
})

export default dialogsReducer;