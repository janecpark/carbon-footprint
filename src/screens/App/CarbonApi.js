import axios from 'axios';

const baseURL = 'https://carbon-footprint-v1.herokuapp.com';
let _token = localStorage.getItem('token');

/** API endpoints for the routes */

class CarbonApi {
  static async travelData(formdata) {
    try {
      const response = await axios.get(`${baseURL}/carbon/calculate`, {
        params: formdata,
      });
      return response.data;
    } catch (err) {
      console.error('API ERROR:', err.responses);
      let msg = err.response.data.message;
      throw Array.isArray(msg) ? msg : [msg];
    }
  }
  static async sendResult(result, username) {
    try {
      const response = await axios.post(
        `${baseURL}/carbon/${username}/result`,
        {
          ...result,
          _token,
        }
      );
      return response.data;
    } catch (err) {
      console.error('API ERROR:', err.responses);
      let msg = err.response.data.message;
      throw Array.isArray(msg) ? msg : [msg];
    }
  }
  static async getResult(username) {
    try {
      const response = await axios.get(
        `${baseURL}/carbon/${username}/user-result`,
        {
          params: { _token },
        }
      );
      return response;
    } catch (err) {
      console.error('API ERROR:', err.responses);
      let msg = err.response.data.message;
      throw Array.isArray(msg) ? msg : [msg];
    }
  }
  static async removeResultApi(idx) {
    try {
      const response = await axios.delete(`${baseURL}/carbon/${idx}`);
      return response;
    } catch (err) {
      console.error('API ERROR:', err.responses);
      let msg = err.response.data.message;
      throw Array.isArray(msg) ? msg : [msg];
    }
  }
  static async actionResult(result, idx) {
    try {
      const response = await axios.post(`${baseURL}/takeaction/${idx}`, result);
      return response;
    } catch (err) {
      console.error('API ERROR:', err.responses);
      let msg = err.response.data.message;
      throw Array.isArray(msg) ? msg : [msg];
    }
  }
}

export default CarbonApi;
