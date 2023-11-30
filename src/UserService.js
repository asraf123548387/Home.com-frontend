import axios from "axios";
const API_URL = "http://localhost:8080";

class UserService{
    saveUser(user){
        return axios.post(API_URL+"/saveUser",user);
    }
    saveAddUser(user){
        return axios.post(API_URL+"/adminSaveAddUser",user)
    }

   
}
export default new UserService