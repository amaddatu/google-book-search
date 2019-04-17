import axios from 'axios';

let API = {
    getModel2: id => {
        return axios.get("/api/model2/" + id);
    }
}
export default API;