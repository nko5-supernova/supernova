import { LOAD_MOVIES, LOAD_MOVIES_SUCCESS } from '../actions/movies';

const INITIAL_STATE = {
  movies: null,
  isLoaded: false,
  isLoading: false
}

export default function movies(state=INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_MOVIES:
      return {...INITIAL_STATE, isLoading: true};
    case LOAD_MOVIES_SUCCESS:
      return {...state, movies:action.movies, isLoading: false, isLoaded: true}
    default:
      return state;
  }
}
