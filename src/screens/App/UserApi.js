import axios from 'axios';

const baseURL = 'https://carbon-footprint-v1.herokuapp.com';
let _token = localStorage.getItem('token');

/** API endpoints for the routes */

class UserApi {
  static async signUp(data) {
    try{
      const response = await axios.post(`${baseURL}/users`, data);
      return response.data;
    }catch(err){
      console.error('API ERROR:', err.responses);
      let msg = err.response.data.message;
      throw Array.isArray(msg) ? msg : [msg];
    }
  }
  static async login(data) {
    try{
      const response = await axios.post(`${baseURL}/login`, data);
      return response.data;
    }catch(err){
      console.error('API ERROR:', err.responses);
      let msg = err.response.data.message;
      throw Array.isArray(msg) ? msg : [msg];
    }
  }
  static async getUser(username) {
    try{
      const response = await axios.get(`${baseURL}/users/${username}`, {
        params: { _token },
      });
      return response.data.user;
    }catch(err){
      console.error('API ERROR:', err.responses);
      let msg = err.response.data.message;
      throw Array.isArray(msg) ? msg : [msg];
    }
  }
}

export default UserApi;
