export const LOAD_AUDIO = 'LOAD_AUDIO';
export const AUDIO_READY = 'AUDIO_READY';
export const PLAY = 'START_PLAY';
export const PAUSE = 'PAUSE_PLAY';
export const RESUME = 'RESUME_PLAY';

export function loadAudio(url) {
  return { type: LOAD_AUDIO, url };
}

export function ready() {
  return { type: AUDIO_READY };
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
