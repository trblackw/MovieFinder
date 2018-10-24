import { FETCH_GENRES } from "./genre_actions";

const initialState = {
  genres: []
};

export default function(state = initialState, action) {
  const { type, genres } = action;
  switch (type) {
    case FETCH_GENRES:
      return {
        ...state,
        genres
      };
    default:
      return state;
  }
}
