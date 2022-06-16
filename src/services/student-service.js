import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/";

class StudentService {

    getAll(){
        return axios.get(API_URL + "students", {
            headers: authHeader()
        });
    }
}

export default new StudentService();