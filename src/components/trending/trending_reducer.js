import { FETCH_TRENDING } from "./trending_actions";

const initalState = {
  trendingMovies: [],
  trendingTVShows: []
};

export default function(state = initalState, action) {
  const { type, trending } = action;

  switch (type) {
    case FETCH_TRENDING:
      return {
        ...state,
        trendingMovies: trending.trendingMovies,
        trendingTVShows: trending.trendingTVShows
      };
    default:
      return state;
  }
}
