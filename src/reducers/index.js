import { combineReducers } from 'redux';
import game from './game';
import audio from './audio';
import movies from './movies';


const rootReducer = combineReducers({
  game,
  audio,
  movies
});


export default rootReducer;
