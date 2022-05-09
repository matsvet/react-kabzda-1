import s from './FormsControls.css'
import React from "react";

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.error && meta.touched

    return <div className={s.formControl + " " + hasError ? s.error : ""}>
        <div>
            {props.children}
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...restProps} {...input}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...restProps} {...input}/></FormControl>
}