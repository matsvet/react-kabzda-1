import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {sendMessageAC} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../helpers/validators/validators";
import {Textarea} from "../Common/FormsControls/FormsControls";

const DialogsContainer = (props) => {

    let dialogs = props.dialogs.map(dlg => <DialogItem name={dlg.name} key={dlg.id} id={dlg.id}/>)
    let messages = props.messages.map(msg => <Message message={msg.message} key={msg.id} id={msg.id}/>)

    // let onMessageChange = (event) => {
    //     let text = event.target.value;  // event сам определится как текстареа, т.к. в ней проищошло событие onChange
    //     props.onMessageChange(text);
    // }

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs}
            </div>
            <div className={s.messagesStyle}>
                {messages}
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

let maxLength30 = maxLengthCreator(30)

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"newMessageBody"}
                   component={Textarea}
                   validate={[required, maxLength30]}
                   placeholder="Enter your message"/>
        </div>
        <div>
            <button>Sendшл</button>
        </div>
    </form>
}

const AddMessageReduxForm = reduxForm({
    form: "dialogAddMessageForm"
})(AddMessageForm)

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => dispatch(sendMessageAC(newMessageBody)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogsContainer)

// возвращает новую контейнерную компоненту
// export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent); // вызываем ту функцию, которую нам вернула функция коннект