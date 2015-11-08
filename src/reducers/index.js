import { combineReducers } from 'redux';
import leaderboard from './leaderboard';
import game from './game';
import audio from './audio';
import turn from './turn';

const rootReducer = combineReducers({
  leaderboard,
  game,
  audio,
  turn
});


export default rootReducer;
