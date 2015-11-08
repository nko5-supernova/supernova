import { combineReducers } from 'redux';
import leaderboard from './leaderboard';
import game from './game';
import audio from './audio';

const rootReducer = combineReducers({
  leaderboard,
  game,
  audio
});


export default rootReducer;
