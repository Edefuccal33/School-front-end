import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/";

class TeacherService {

    getAll(){
        return axios.get(API_URL + "teachers", {
            headers: authHeader()
        });
    }
}

export default new TeacherService();