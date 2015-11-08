import {
  START_GAME_REQUEST,
  START_GAME_SUCCESS,
  ANSWER_CARD_SUCCESS,
  ANSWER_CARD_REQUEST,
  NEXT_CARD
} from '../actions/game';

// import { FINISHED_AUDIO } from '../actions/audio';

const INITIAL_STATE = {};

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
  case START_GAME_REQUEST:
    return { status: 'starting' };
  case START_GAME_SUCCESS:
    return {
      ...state,
      ...action.game,
      correctAnswer: -1,
      currentMatch: 0,
      status: 'playing'
    };
  case ANSWER_CARD_REQUEST:
    return {...state, checkingAnswer: true};
  case ANSWER_CARD_SUCCESS:
    return {...state, checkingAnswer: false, correctAnswer: action.correctAnswer};
  case NEXT_CARD:
    if (state.currentMatch === state.questions.length - 1) {
      return {...state, status: 'finished' };
    }

    return {...state,
      currentMatch: state.currentMatch + 1,
      checkingAnswer: false,
      correctAnswer: -1
    };
  default:
    return state;
  }
}
