import { LOAD_LEADERBOARD_SUCCESS } from '../actions/leaderboard';

const INITIAL_STATE = {
  items: []
};

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOAD_LEADERBOARD_SUCCESS:
    return {
      ...state,
      items: action.leaderboard.list
    };
  default:
    return state;
  }
}
