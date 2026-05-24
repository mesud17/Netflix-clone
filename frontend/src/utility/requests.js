
// all API endpoints

const API_KEY=import.meta.env.VITE_TMDB_API_KEY

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}`,
  fetchNewReleases: `/movie/now_playing?api_key=${API_KEY}`,
  fetchSuggestions: `/discover/movie?api_key=${API_KEY}`,
};

export default requests;

