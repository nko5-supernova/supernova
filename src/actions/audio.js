export const LOAD_AUDIO = 'LOAD_AUDIO';
export const AUDIO_READY = 'AUDIO_READY';
export const PLAY = 'START_PLAY';
export const PAUSE = 'PAUSE_PLAY';
export const RESUME = 'RESUME_PLAY';
export const MUTE = 'MUTE';
export const UNMUTE = 'UNMUTE';
export const SET_CURRENT_TIME = 'SET_CURRENT_TIME';
export const FINISHED_AUDIO = 'FINISHED_AUDIO';

export function loadingAudio(url) {
  return { type: LOAD_AUDIO, url };
}

export function ready(duration) {
  return { type: AUDIO_READY, duration };
}

export function startPlaying() {
  return { type: PLAY };
}

export function pausePlaying() {
  return { type: PAUSE };
}

export function resumePlaying() {
  return { type: RESUME };
}

export function setCurrentTime(time) {
  return (dispatch, getState) => {
    dispatch({ type: SET_CURRENT_TIME, time });

    const audio = getState().audio;

    if (audio.isLoaded && (audio.currentTime / audio.duration) >= 0.99) {
      dispatch({ type: FINISHED_AUDIO });
    }
  };
}

export function mute() {
  return { type: MUTE };
}

export function unmute() {
  return { type: UNMUTE };
}
