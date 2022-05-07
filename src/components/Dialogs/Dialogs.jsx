import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const DialogsContainer = (props) => {

    let dialogs = props.dialogs.map(dlg => <DialogItem name={dlg.name} key={dlg.id} id={dlg.id}/>)
    let messages = props.messages.map(msg => <Message message={msg.message} key={msg.id} id={msg.id}/>)

    let onMessageChange = (event) => {
        let text = event.target.value;  // event сам определится как текстареа, т.к. в ней проищошло событие onChange
        props.onMessageChange(text);
    }
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs}
            </div>
            <div className={s.messagesStyle}>
                {messages}
                <textarea onChange={onMessageChange}
                          value={props.newMessageText}
                          placeholder="Enter your message"/>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => dispatch(updateNewMessageCreator(text)),
        sendMessage: () => dispatch(sendMessageCreator()),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogsContainer)

// возвращает новую контейнерную компоненту
// export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent); // вызываем ту функцию, которую нам вернула функция коннект