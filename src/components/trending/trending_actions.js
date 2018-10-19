export const FETCH_TRENDING = "FETCH_TRENDING";

export const fetchTrending = () => {
  return async dispatch => {
    try {
      const trendingRes = await fetch(
        "https://api.themoviedb.org/3/trending/all/day?api_key=ba1ed06e4a2885f1ceb3219f8f940de6"
      );
      const trending = await trendingRes.json();
      const trendingMovies = trending.results.filter(
        item => !item.original_name
      );
      const trendingTVShows = trending.results.filter(
        item => item.original_name
      );

      return dispatch({
        type: "FETCH_TRENDING",
        trending: {
          trendingMovies,
          trendingTVShows
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
};
