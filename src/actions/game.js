import axios from 'axios';
export const START_GAME_REQUEST = 'START_GAME_REQUEST';
export const START_GAME_SUCCESS = 'START_GAME_SUCCESS';
export const START_GAME_FAILURE = 'START_GAME_FAILURE';
export const ANSWER_CARD_REQUEST = 'ANSWER_CARD_REQUEST';
export const ANSWER_CARD_SUCCESS = 'ANSWER_CARD_SUCCESS';
export const ANSWER_CARD_FAILURE = 'ANSWER_CARD_FAILURE';

export function startGame(username) {
  return async dispatch => {
    try {
      dispatch({ type: START_GAME_REQUEST, username });
      const result = await axios({
        url: `/api/game`,
        method: 'POST',
        data: { username: 'maxcnunes' }
      });
      dispatch({ type: START_GAME_SUCCESS, game: result.data });
    } catch (error) {
      dispatch({ type: START_GAME_FAILURE, error });
    }
  };
}


export function answerCard(answer) {
  return async (dispatch, getState) => {
    try {
      const gameId = getState().game._id;
      dispatch({ type: ANSWER_CARD_REQUEST, answer });
      const result = await axios({
        url: `/api/game/${gameId}/answer`,
        method: 'POST',
        data: { answer }
      });
      dispatch({ type: ANSWER_CARD_SUCCESS, ...result.data });
    } catch (error) {
      dispatch({ type: ANSWER_CARD_FAILURE, error });
    }
  };
}
