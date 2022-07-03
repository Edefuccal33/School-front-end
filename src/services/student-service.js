import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/students/";
const API_ENROLL = "http://localhost:8080/subjects/";

class StudentService {

    getAll(){
        return axios.get(API_URL, {
            headers: authHeader()
        });
    }

    createStudent(name, email, birthDate, phoneNumber){
        return axios.post(API_URL, {
            name,
            email,
            birthDate,
            phoneNumber
        }, {
            headers: authHeader()
        });
    }

    deleteStudent(id){
        return axios.delete(API_URL + id,
        {
            headers: authHeader()
        });
    }

    enrollStudentToSubject(idSubject, idStudent){
        return axios.put(API_ENROLL + idSubject + "/students/" + idStudent, {
            headers: authHeader()
        });
    }
}

export default new StudentService();