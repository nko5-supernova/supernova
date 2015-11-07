import { LOAD_AUDIO, AUDIO_READY, PLAY, PAUSE, RESUME } from '../actions/audio';
import { ANSWER_CARD } from '../actions/game';

// export const LOAD_AUDIO = 'LOAD_AUDIO';
// export const AUDIO_READY = 'AUDIO_READY';
// export const PLAY = 'START_PLAY';
// export const PAUSE = 'PAUSE_PLAY';
// export const RESUME = 'RESUME_PLAY';

const INITIAL_STATE = {
  url: null,
  isLoaded: false,
  isLoading: false,
  isPlaying: false,
  isPaused: false
}

export default function audio(state=INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_AUDIO:
      return {...INITIAL_STATE, url: action.url, isLoading: true}
    case AUDIO_READY:
      return {...state, isLoaded: true, isLoading: false}
    case PLAY:
      return {...state, isPlaying: true}
    case ANSWER_CARD:
    case PAUSE:
        return {...state, isPaused: true}
    case RESUME:
      return {...state, isPaused: false}
    default:
      return state;
  }
}
