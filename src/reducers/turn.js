import { START_TURN, FINISH_TURN } from '../actions/turn';
import { AUDIO_READY } from '../actions/audio';
import { LOAD_MOVIES_SUCCESS } from '../actions/movies';

const INITIAL_STATE = {
  dependencies: 2,
  canStart: false,
  didStart: false,
  didAnswer: null
};

export default function turn(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FINISH_TURN:
    return {...INITIAL_STATE};
  case START_TURN:
    return {...state, didStart: true};
  case AUDIO_READY:
  case LOAD_MOVIES_SUCCESS:
    const dependencies = state.dependencies - 1;

    return {...state, dependencies: dependencies, canStart: dependencies <= 0};
  default:
    return state;
  }
}
