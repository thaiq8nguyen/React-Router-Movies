import axios from "axios";

const client = axios.create({
    baseURL: "http://www.omdbapi.com/"
})
const apiKey = process.env.REACT_APP_OMDB_API_KEY;

export default {
    getMovies() {
        return client.get(`?apikey=${apiKey}&s=Avengers`);
    }
}