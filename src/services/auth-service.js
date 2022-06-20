import axios from "axios";

const API_URL = "http://localhost:8080/auth/";

class AuthService {

    login(username, password){
        return axios
            .post(API_URL + "signin", {
                username,
                password
            })
            .then(response => {
                if (response.data) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
            
    }

    logout(){
        localStorage.removeItem("user");
        console.log("si desaparezco se refrescó la página.")
    }

    signup(username, password){
        return axios.post(API_URL + "signup", {
            username,
            password
        });
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem("user"));
    }

    isLogged() {
        return localStorage.getItem("user") ? true : false;
    }
}

export default new AuthService();