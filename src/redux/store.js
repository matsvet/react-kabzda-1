import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Have you ever been in Egypt?', likesCount: 4},
                {id: 2, message: 'I was in Cairo a couple of weeks ago', likesCount: 22}
            ],
            newPostText: "mr. samurai",
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Yo-yo'},
                {id: 2, message: 'Man'},
                {id: 3, message: 'Hooli'},
                {id: 4, message: 'Grusteam'},
            ],
            dialogs: [
                {id: 0, name: 'Me'},
                {id: 1, name: 'Mashka'},
                {id: 2, name: 'Lenka'},
                {id: 3, name: 'Dashka'},
                {id: 4, name: 'Pashka'},
                {id: 5, name: 'Mishka'},
                {id: 6, name: 'Sashka'}
            ],
            newMessageText: "",
        },
        sidebarBlock: {
            friends: [
                {
                    id: 1,
                    name: "Lora",
                    imgSrc: "https://kartinkin.net/uploads/posts/2021-02/1612333628_17-p-arti-v-multyashnom-stile-art-kartinki-17.jpg"
                },
                {
                    id: 2,
                    name: "Dora",
                    imgSrc: "https://otvet.imgsmail.ru/download/74140388_3bd5c819b48fbdcbbf78dc9f988ffd4a_800.jpg"
                },
                {
                    id: 3,
                    name: "Chel",
                    imgSrc: "https://yt3.ggpht.com/ytc/AKedOLTaNSpsJHUJDzU0b_287dpfuZvQR9G0PV_Pm1el9Q=s900-c-k-c0x00ffffff-no-rj"
                },
            ]
        }
    },

    _callSubscriber() {
    },   // empty function. Useful to rewrite it almost immediately

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;