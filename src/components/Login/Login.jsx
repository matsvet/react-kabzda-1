import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {loginTC} from "../../redux/authReducer";
import {required} from "../../helpers/validators/validators";
import {Navigate} from "react-router";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"email"}
                   placeholder="Email"
                   validate={[required]}
                   component={Input}
            />
        </div>
        <div>
            <Field name={"password"}
                   placeholder="Password"
                   type={"password"}
                   validate={[required]}
                   component={Input}
            />
        </div>
        <div>
            <Field name={"rememberMe"}
                   type={"checkbox"}
                   component={"input"}
            /> remember me
        </div>
        {props.error &&
            <div>
                {props.error}
            </div>
        }
        <div>
            <button>Submit</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Navigate to="/profile"/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {login: loginTC})(Login)