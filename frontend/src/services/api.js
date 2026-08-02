import axios from "axios";

const API = axios.create({
  baseURL: "https://techlearn-backend-308g.onrender.com/api",
});

export default API;