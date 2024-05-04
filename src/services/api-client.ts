import axios from "axios";

const riotInstance = axios.create({
    baseURL: "https://luisgg-hippo.onrender.com"
});

const splashInstance = axios.create({
    baseURL: "https://luisgg-hippo.onrender.com"
});

export default {riotInstance, splashInstance} ;