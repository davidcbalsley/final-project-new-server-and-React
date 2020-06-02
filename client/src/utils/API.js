import axios from "axios";

export default {
    postCatName: function(query) {
        return axios.post("/api/catnames", query);
    },
    createLoginCredentials: function(query) {
        return axios.post("/api/users/signup", query);
    },
    verifyLoginCredentials: function(query) {
        return axios.post("/api/users/login", query);
    },
    createClient: function(query) {
        return axios.post("/api/clients", query);
    },
    getClient: function(id) {
        return axios.get("/api/clients/" + id);
    },
    findClientByUserId: function(id) {
        return axios.get("/api/clients/userid/" + id);
    },
    findClientByLicensePlate: function(query) {
        return axios.get("/api/clients/plate/platestate=" + query.plateState + "&license=" + query.license);
    }
}