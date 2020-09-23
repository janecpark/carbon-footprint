import axios from 'axios';

const baseURL = 'http://localhost:3001';

class CarbonApi {
  static async travelData(formdata) {
    const response = await axios.get(`${baseURL}/carbon/calculate`, {
      params: formdata,
    });
    return response.data;
  }
  static async sendResult(result, username) {
    const response = await axios.post(`${baseURL}/carbon/${username}/result`, result);
    return response.data;
  }
  static async getResult(username) {
    const response = await axios.get(`${baseURL}/carbon/${username}/user-result`);
    return response;
  }
  static async removeResultApi(idx) {
    const response = await axios.delete(`${baseURL}/carbon/${idx}`);
    return response;
  }
  static async actionResult(result, idx) {
    const response = await axios.post(`${baseURL}/takeaction/${idx}`, result);
    console.log(response);
    return response;
  }
}

export default CarbonApi;
