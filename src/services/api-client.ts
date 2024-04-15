import axios from "axios";

export default axios.create({
    baseURL: 'https://la2.api.riotgames.com/lol',
    params: {
        api_key: 'RGAPI-d685dde6-abd3-4a17-8835-d9b63e0b6a07'
    }
});