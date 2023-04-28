import axios from "axios"
import normalize from "helpers/normalize";


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: { api_key: '2b43cfeb8fadffb304d7dda7b2d5a230' }
});

const popular = async () => {
    const response = await movieDB.get('trending/movie/week');
    return normalize.forList(response.data);
};

const search = async (query) => {
    const response = await movieDB.get('search/movie', { params: { query } });
    return normalize.forList(response.data);
};

const details = async (id) => {
    const response = await movieDB.get(`movie/${id}`);
    return normalize.forDetails(response.data);
};

const cast = async (id) => {
    const response = await movieDB.get(`movie/${id}/credits`);
    return normalize.forCast(response.data);
};

const reviews = async (id) => {
    const response = await movieDB.get(`movie/${id}/reviews`);
    return normalize.forReviews(response.data);
};

const API = {
    popular, search, details, cast, reviews
}

export default API;
