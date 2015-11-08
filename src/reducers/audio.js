import { LOAD_AUDIO, AUDIO_READY, PLAY, PAUSE, RESUME, SET_CURRENT_TIME, MUTE, UNMUTE } from '../actions/audio';
import { ANSWER_CARD } from '../actions/game';
import { FINISH_TURN } from '../actions/turn';

const INITIAL_STATE = {
  url: null,
  isLoaded: false,
  isLoading: false,
  isPlaying: false,
  isPaused: false,
  isMuted: false,
  duration: 0,
  currentTime: 0
};

export default function audio(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FINISH_TURN:
    return {...INITIAL_STATE};
  case LOAD_AUDIO:
    return {...state, url: action.url, isLoading: true};
  case AUDIO_READY:
    return {...state,
      isLoaded: true,
      isLoading: false,
      duration: action.duration};
  case PLAY:
    return {...state, isPlaying: true};
  case ANSWER_CARD:
  case PAUSE:
    return {...state, isPaused: true};
  case RESUME:
    return {...state, isPaused: false};
  case SET_CURRENT_TIME:
    return {...state, currentTime: action.time};
  case MUTE:
    return {...state, isMuted: true};
  case UNMUTE:
    return {...state, isMuted: false};
  default:
    return state;
  }
}
