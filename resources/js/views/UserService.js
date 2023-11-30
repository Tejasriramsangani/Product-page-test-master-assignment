import axios from "axios";

export class UserService {
    static getAllUsers() {
        let dataURL = `/client/products/fall-limited-edition-sneakers`;
        return axios.get(dataURL);
    }
}