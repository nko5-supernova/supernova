import { START_GAME_SUCCESS, ANSWER_CARD_SUCCESS } from '../actions/game';
import { FINISH_TURN } from '../actions/turn';

const INITIAL_STATE = {};

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
  case START_GAME_SUCCESS:
    return {
      ...state,
      ...action.game,
      currentMatch: 0,
      isOver: false
    };
  case ANSWER_CARD_SUCCESS:
    return state;
  case FINISH_TURN:
    if (state.currentMatch === state.questions.length - 1) {
      return { isOver: true };
    }

    return {...state, currentMatch: state.currentMatch + 1};
  default:
    return state;
  }
}
