import React, {Component} from "react";
import {useMatch, useParams} from "react-router";

export const withRouter = (Component) =>{
    let RouterComponent = (props) => {
        const params = useParams();
        return <Component {...props} params={params}/>;
    }
    return RouterComponent;
}