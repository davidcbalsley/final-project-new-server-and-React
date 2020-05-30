import axios from "axios";

export default {
    postCatName: function(query) {
        return axios.post("/api/catnames", query);
    },
    postLoginCredentials: function(query) {
        return axios.post("/api/users/signup", query);
    }
}