import { combineReducers } from 'redux';
import game from './game';
import audio from './audio';
import movies from './movies';
import turn from './turn';

const rootReducer = combineReducers({
  game,
  audio,
  movies,
  turn
});


export default rootReducer;
