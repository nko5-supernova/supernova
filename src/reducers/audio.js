import { LOAD_AUDIO } from '../actions/audio';

// export const LOAD_AUDIO = 'LOAD_AUDIO';
// export const AUDIO_READY = 'AUDIO_READY';
// export const PLAY = 'START_PLAY';
// export const PAUSE = 'PAUSE_PLAY';
// export const RESUME = 'RESUME_PLAY';

const INITIAL_STATE = {
  url: null,
  isPlaying: false,
  isLoaded: false,
  isLoading: false,
  isPaused: false
}

export default function audio(state=INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_AUDIO:
      return {...INITIAL_STATE, url: action.url, isLoading: true}
    default:
      return state;
  }
}
