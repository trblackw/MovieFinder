export const FETCH_MOVIES = "FETCH_MOVIES";

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
      type: FETCH_MOVIES,
       pages,
      activePage: pages[0],
    });
  };
};

// export const changePage = (page) => {

// }
