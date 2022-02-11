import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://lh3.googleusercontent.com/pw/AM-JKLWC7NkvXkrctpf19ahiGMaU9beTgC7rSzQ4nzzD7WaSqSQTtRBDBDVnn8UjaU-ElqG0-6TSU5HrUCB4Qs8oE4gPdkHweVCW6mmPjKSYJxCUyXjc0t-uVeO99Td3MBTNLgFME4b5m1s2ZPqgB01UM6heBw=w958-h220-no?authuser=0'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                MY POSTS
                <div>
                    new post
                </div>
                <div className='posts'>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                    <div className={s.item}>
                        post 3
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile;