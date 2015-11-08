import { LOAD_MOVIES, LOAD_MOVIES_SUCCESS } from '../actions/movies';
import { FINISH_TURN } from '../actions/turn';

const INITIAL_STATE = {
  movies: null,
  isLoaded: false,
  isLoading: false
};

export default function movies(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FINISH_TURN:
    return {...INITIAL_STATE};
  case LOAD_MOVIES:
    return {...state, isLoading: true};
  case LOAD_MOVIES_SUCCESS:
    return {...state, movies: action.movies, isLoading: false, isLoaded: true};
  default:
    return state;
  }
}
