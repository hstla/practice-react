import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "b37ce047e5ca8da7f56e851466b7f330",
        language: "ko-KR",
    }
});

export default instance;