import axios from 'axios';

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3"
});

export default instance;



// axios.get()
// https://api.themoviedb.org/3
// 
// request.fetchTrending 
// /trending/all/week?api_key=${API_KEY}&language=en-US`
// 
// fetchUrl = request.fetchTrending 
// fetchUrl = /trending/all/week?api_key=${API_KEY}&language=en-US`
// 
// axios.get(fetchUrl)
// https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
// 
// 
// 
// 
