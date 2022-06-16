import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/";

class UserService{

    getIndex(){
        return axios.get(API_URL + "index");
    }

    //Logged:
    getHome(){
        return axios.get(API_URL + "home", {
            headers: authHeader()
        });
    }
}

export default new UserService();