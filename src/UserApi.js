import axios from 'axios';

const baseURL = 'http://localhost:3001'

class UserApi {
    static async signUp(data){
        const response = await axios.post(`${baseURL}/users`, data)
        console.log(response);
        return response
    }
}

export default UserApi;