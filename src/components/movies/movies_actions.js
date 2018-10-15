export const FETCH_MOVIES = "FETCH_MOVIES";
export const CHANGE_PAGE = "CHANGE_PAGE";

export const fetchMovies = () => {
  const API_KEY = process.env.API_KEY;
  const pageOne = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
  const pageTwo = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2`;
  const pageThree = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3`;
  return async dispatch => {
    const movieRes = await Promise.all([
      fetch(pageOne),
      fetch(pageTwo),
      fetch(pageThree)
    ]).then(responses => Promise.all(responses.map(res => res.json())));
    const pages = movieRes.map(page => page.results);
    return dispatch({
      type: "FETCH_MOVIES",
      pages,
      activePage: pages[0]
    });
  };
};
//broken
export const changePage = (pages, page) => {
  return dispatch => {
    return dispatch({
      type: "CHANGE_PAGE",
      activePage: pages[page]
    });
  };
};
