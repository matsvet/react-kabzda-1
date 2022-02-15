import s from './ProfileInfo.module.css'
import React from "react";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={s.img}
                     src='https://lh3.googleusercontent.com/pw/AM-JKLWC7NkvXkrctpf19ahiGMaU9beTgC7rSzQ4nzzD7WaSqSQTtRBDBDVnn8UjaU-ElqG0-6TSU5HrUCB4Qs8oE4gPdkHweVCW6mmPjKSYJxCUyXjc0t-uVeO99Td3MBTNLgFME4b5m1s2ZPqgB01UM6heBw=w958-h220-no?authuser=0'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;