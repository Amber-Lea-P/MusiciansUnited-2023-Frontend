import axios from "axios";

const newRequest = axios.create({
    baseURL: "https://musiciansunited-backend.onrender.com/api",
    withCredentials: true,
  });
  
  export default newRequest;