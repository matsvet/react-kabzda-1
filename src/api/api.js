import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "33fe7bf3-6f36-4c65-8bdd-fc058df0da34"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {return response.data})
    },
    follow(userId) {
        return instance.post(`follow/` + userId)
            .then(response => {return response.data})
    },
    unfollow(userId) {
        return instance.delete(`follow/` + userId)
            .then(response => {return response.data})
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {return response.data})
    },
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
}