import axios from "axios";
export default axios.create({
    /* send all cookies */
    withCredentials:true
});