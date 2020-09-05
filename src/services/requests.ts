import React from "react";

const API_KEY = "d9ea41d73abd535e9726629c3bef359c";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie&api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie&api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
