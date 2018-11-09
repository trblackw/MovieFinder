export const FETCH_SEARCH = "FETCH_SEARCH";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const HANDLE_SEARCH = "HANDLE_SEARCH";

export const searchMovies = () => {
  const API_KEY = process.env.API_KEY;

  const pageOne = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
  const pageTwo = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2`;
  const pageThree = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3`;
  const pageFour = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=4`;
  const pageFive = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=5`;
  return async dispatch => {
    try {
      const movieRes = await Promise.all([
        fetch(pageOne),
        fetch(pageTwo),
        fetch(pageThree),
        fetch(pageFour),
        fetch(pageFive)
      ]).then(responses => Promise.all(responses.map(res => res.json())));
      const moviesArr = movieRes.map(page => page.results);
      const movies = [
        ...moviesArr[0],
        ...moviesArr[1],
        ...moviesArr[2],
        ...moviesArr[3],
        ...moviesArr[4]
      ];
      return dispatch({
        type: "FETCH_SEARCH",
        movies
      });
    } catch (error) {
      console.log(error);
    }
  };
};

