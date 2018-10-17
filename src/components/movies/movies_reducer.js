import {
  FETCH_MOVIES,
  FETCH_MOVIE_DETAILS,
  CHANGE_PAGE
} from "./movies_actions";

const initialState = {
  pages: [],
  activePage: 0,
  movie: {},
  reviews: [],
  genres: []
};

export default function(state = initialState, action) {
  const { type, pages, page, movie, reviews, genres } = action;
  switch (type) {
    case FETCH_MOVIES:
      return {
        ...state,
        pages,
        activePage: pages[0]
      };
    case FETCH_MOVIE_DETAILS:
      return {
        ...state,
        movie,
        reviews,
        genres
      };
    case CHANGE_PAGE:
      return {
        ...state,
        activePage: page
      };
    default:
      return state;
  }
}
