import axios from "axios";

export default {
    postCatName: function(query) {
        return axios.post("/api/catnames", query);
    }
}