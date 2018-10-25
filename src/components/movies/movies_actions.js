export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIE_DETAILS = "FETCH_MOVIE_DETAILS";
const API_KEY = process.env.API_KEY;

export const fetchMovies = () => {
  const pageOne = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
  const pageTwo = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2`;
  const pageThree = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3`;
  const pageFour = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=4`;
  const pageFive = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=5`;
  return async dispatch => {
    const movieRes = await Promise.all([
      fetch(pageOne),
      fetch(pageTwo),
      fetch(pageThree),
      fetch(pageFour),
      fetch(pageFive)
    ]).then(responses => Promise.all(responses.map(res => res.json())));
     const pages = movieRes.map(page => page.results);
    return dispatch({
      type: FETCH_MOVIES,
      pages
    });
  };
};

// export const fetchMovieDetails = id => {
//   console.log("fetching movie details!");

//   return async dispatch => {
//     try {
//       const movieRes = await fetch(
//         `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
//       );
//       const reviewRes = await fetch(
//         `http://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
//       );
//       const movie = await movieRes.json();
//       const reviews = await reviewRes.json();
//       return dispatch({
//         type: FETCH_MOVIE_DETAILS,
//         details: {
//           movie,
//           reviews: reviews.results,
//           genres: movie.genres
//         }
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };
