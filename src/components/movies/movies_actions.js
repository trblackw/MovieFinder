export const FETCH_MOVIES = "FETCH_MOVIES";
export const ALPHABETIZE_MOVIES = "ALPHABETIZE_MOVIES";
const API_KEY = process.env.API_KEY;

import { chunk } from "../../helpers";

export const fetchMovies = () => {
  return async dispatch => {
    let pagesToFetch = [];
    for (let i = 1; i <= 10; i++) {
      let page = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}`;
      pagesToFetch.push(page);
    }
    const movieRes = await Promise.all(
      pagesToFetch.map(page => fetch(page))
    ).then(responses => Promise.all(responses.map(res => res.json())));
    const pages = await movieRes.map(page => page.results);
    return dispatch({
      type: FETCH_MOVIES,
      pages
    });
  };
};

export const sortAlphabetical = pages => {
  return dispatch => {
    const flattenedPages = pages
      .flat()
      .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
    const alphabetizedMovies = chunk(flattenedPages, 20);

    return dispatch({
      type: ALPHABETIZE_MOVIES,
      alphabetizedMovies
    });
  };
};
