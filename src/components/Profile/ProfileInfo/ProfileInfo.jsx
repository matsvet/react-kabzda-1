import s from './ProfileInfo.module.css'
import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import {Checkbox} from "antd";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {  // ===   if (props.profile === null || undefined)
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={s.img}
                     src='https://lh3.googleusercontent.com/pw/AM-JKLWC7NkvXkrctpf19ahiGMaU9beTgC7rSzQ4nzzD7WaSqSQTtRBDBDVnn8UjaU-ElqG0-6TSU5HrUCB4Qs8oE4gPdkHweVCW6mmPjKSYJxCUyXjc0t-uVeO99Td3MBTNLgFME4b5m1s2ZPqgB01UM6heBw=w958-h220-no?authuser=0'/>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large}/>
                    <h1>{props.profile.fullName}</h1>
                    <ProfileStatus status={'Govna Poesh'}/>
                </div>
                <div className={s.tipicalDiv}>
                    {props.profile.aboutMe}
                    <Checkbox className={s.tipicalDiv} checked={props.profile.lookingForAJob}>Ищу Работу?</Checkbox>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;