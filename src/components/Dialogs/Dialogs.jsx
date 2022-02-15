import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

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

export default Dialogs;