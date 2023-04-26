import axios from "axios"
import normalize from "helpers/normalize";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: { api_key: '2b43cfeb8fadffb304d7dda7b2d5a230' }
});

const popular = async () => {
    const response = await movieDB.get('trending/movie/week');
    console.log('popular', normalize.forList(response.data));
};

const search = async (query) => {
    const response = await movieDB.get('search/movie', { params: { query } });
    console.log('search', normalize.forList(response.data));
};

const details = async (id) => {
    const response = await movieDB.get(`movie/${id}`);
    console.log('details', normalize.forDetails(response.data));
};

const cast = async (id) => {
    const response = await movieDB.get(`movie/${id}/credits`);
    console.log('cast', normalize.forCast(response.data));
};

const reviews = async (id) => {
    const response = await movieDB.get(`movie/${id}/reviews`);
    console.log('review', normalize.forReviews(response.data));
};

const API = {
    popular, search, details, cast, reviews
}

export default API;

// const config = async () => {
//     const response = await movieDB.get('configuration');
//     console.log('config', response.data);
// };

// popular()
// search('batman')
// details('2661')
// cast('2661')
// reviews('594767')
// // config()
