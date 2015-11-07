import { START_GAME, ANSWER_CARD } from '../actions/game';


const INITIAL_STATE = {};


export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
  case START_GAME:
    return {
      ...state,
      ...action.game,
      currentMatch: 0,
      isPlaying: true
    };
  case ANSWER_CARD:
    if (state.currentMatch < state.cards.length - 1) {
      return {
        ...state,
        currentMatch: state.currentMatch + 1
      };
    }

    return {
      ...state,
      isPlaying: false,
      isOver: true
    };
  default:
    return state;
  }
}
