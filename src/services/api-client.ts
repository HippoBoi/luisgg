import axios from "axios";

const riotInstance = axios.create({
    baseURL: "http://localhost:3000" //"https://luisgg-hippo.onrender.com"
});

export default {riotInstance};