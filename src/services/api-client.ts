import axios from "axios";
import { API_HOST } from "../config";

export default axios.create({
    baseURL: "http://localhost:3000"
});