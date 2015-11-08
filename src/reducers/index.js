import { combineReducers } from 'redux';
import game from './game';
import audio from './audio';

const rootReducer = combineReducers({
  game,
  audio
});


export default rootReducer;
