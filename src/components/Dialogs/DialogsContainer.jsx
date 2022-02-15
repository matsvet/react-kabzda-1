import React from "react";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//
//     let state = props.store.getState().dialogsPage
//     let onMessageChange = (text) => {
//         props.store.dispatch(updateNewMessageCreator(text));
//     }
//     let sendMessage = () => {
//         props.store.dispatch(sendMessageCreator());
//     }
//
//     return <Dialogs onMessageChange={onMessageChange}
//                      sendMessage={sendMessage}
//                      dialogs={state.dialogs}
//                      messages={state.messages}
//                      newMessageText={state.newMessageText}
//             />
// }

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => dispatch(updateNewMessageCreator(text)),
        sendMessage: () => dispatch(sendMessageCreator()),
    }
}

// возвращает новую контейнерную компоненту
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs); // вызываем ту функцию, которую нам вернула функция коннект

export default DialogsContainer;