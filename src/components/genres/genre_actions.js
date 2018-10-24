export const FETCH_GENRES = "FETCH_GENRES";

export const fetchGenres = () => {
  const API_KEY = process.env.API_KEY;

  return async dispatch => {
    try {
      const genreRes = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      const genresList = await genreRes.json();

      return dispatch({
        type: FETCH_GENRES,
        genres: genresList.genres
      });
    } catch (error) {
      console.log(error);
    }
  };
};
