import axios from "axios";

let axiosinstance=axios.create({
    baseURL:"http://localhost:5000"
})
export default axiosinstance