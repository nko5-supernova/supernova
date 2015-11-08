import { LOAD_AUDIO, AUDIO_READY, PLAY, PAUSE, RESUME } from '../actions/audio';
import { ANSWER_CARD } from '../actions/game';
import { FINISH_TURN } from '../actions/turn';

const INITIAL_STATE = {
  url: null,
  isLoaded: false,
  isLoading: false,
  isPlaying: false,
  isPaused: false
};

export default function audio(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FINISH_TURN:
    return {...INITIAL_STATE};
  case LOAD_AUDIO:
    return {...state, url: action.url, isLoading: true};
  case AUDIO_READY:
    return {...state, isLoaded: true, isLoading: false};
  case PLAY:
    return {...state, isPlaying: true};
  case ANSWER_CARD:
  case PAUSE:
    return {...state, isPaused: true};
  case RESUME:
    return {...state, isPaused: false};
  default:
    return state;
  }
}
