import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/";

class StudentService {

    getAll(){
        return axios.get(API_URL + "students", {
            headers: authHeader()
        });
    }

    createStudent(name, email, birthDate, phoneNumber){
        return axios.post(API_URL + "students", {
            name,
            email,
            birthDate,
            phoneNumber,
        }, {
            headers: authHeader()
        });
    }
}

export default new StudentService();