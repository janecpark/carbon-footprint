import axios from 'axios';

const baseURL = 'http://localhost:3001/carbon'

class CarbonApi {
    static async travelData(formdata){  
        const response = await axios.get(`${baseURL}/calculate`, {params: formdata})
        return response.data
    }
}



export default CarbonApi;