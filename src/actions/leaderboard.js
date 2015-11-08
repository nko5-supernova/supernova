import axios from 'axios';
export const LOAD_LEADERBOARD_REQUEST = 'LOAD_LEADERBOARD_REQUEST';
export const LOAD_LEADERBOARD_SUCCESS = 'LOAD_LEADERBOARD_SUCCESS';
export const LOAD_LEADERBOARD_FAILURE = 'LOAD_LEADERBOARD_FAILURE';


export function loadLeaderboard() {
  return async dispatch => {
    try {
      dispatch({ type: LOAD_LEADERBOARD_REQUEST });
      const result = await axios({
        url: `/api/leaderboard`,
        method: 'GET'
      });
      dispatch({ type: LOAD_LEADERBOARD_SUCCESS, leaderboard: result.data });
    } catch (error) {
      dispatch({ type: LOAD_LEADERBOARD_FAILURE, error });
    }
  };
}
