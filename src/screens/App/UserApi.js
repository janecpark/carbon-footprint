import axios from 'axios';

const baseURL = 'http://localhost:3001'

class UserApi {
   
    static async signUp(data){
        const response = await axios.post(`${baseURL}/users`, data)
        return response
    }
    static async login(data){
        const response = await axios.post(`${baseURL}/login`, data)
        return response.data
    }
    static async getUser(username){
        let _token = localStorage.getItem('token')
        const response = await axios.get(`${baseURL}/users/${username}`, {
            headers:{
                Authorization: _token
            }
        })
        return response.data.user
    }
}

export default UserApi;