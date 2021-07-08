import axios from "axios";

const client = axios.create({
    baseURL: "http://www.omdbapi.com/"
})
const apiKey = process.env.REACT_APP_OMDB_API_KEY;

export default {
    getMovies() {
        return client.get(`?apikey=${apiKey}&s=Avengers`);
    },

    getMovieByID(imdbID) {
        return client.get(`?apikey=${apiKey}&i=${imdbID}`);
    },
    
    getMoviesByTitle(title) {
        return client.get(`?apikey=${apiKey}&s=${title}`);
    }
}