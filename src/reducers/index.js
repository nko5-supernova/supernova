import { combineReducers } from 'redux';
import game from './game';
import audio from './audio';
import turn from './turn';

const rootReducer = combineReducers({
  game,
  audio,
  turn
});


export default rootReducer;
