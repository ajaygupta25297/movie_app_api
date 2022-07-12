import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },   

  // Gets all saved movies
  getAllMovies: function() {
    return axios.get("api/movies");
  },

  // Deletes the movie with the given id
  deleteMovie: function(id) {
    return axios.delete("/api/movies/" + id);
  },
  
  // Saves a movie to the database
  goSaveMovie: function(movieData) {
    return axios.post("/api/movies", movieData);
  }
};
