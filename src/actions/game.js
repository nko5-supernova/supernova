export const START_GAME = 'START_GAME';
export const ANSWER_CARD = 'ANSWER_CARD';


export function startGame() {
  return (dispatch) => {
    dispatch({
      type: START_GAME,
      game: {
        cards: [
          {
            soundtrack: 'url?',
            options: [
              { movie: 'Movie 1.1', isCorrect: false },
              { movie: 'Movie 1.2', isCorrect: false },
              { movie: 'Movie 1.3', isCorrect: true },
              { movie: 'Movie 1.4', isCorrect: false }
            ]
          },
          {
            soundtrack: 'url?',
            options: [
              { movie: 'Movie 2.1', isCorrect: false },
              { movie: 'Movie 2.2', isCorrect: false },
              { movie: 'Movie 2.3', isCorrect: true },
              { movie: 'Movie 2.4', isCorrect: false }
            ]
          },
          {
            soundtrack: 'url?',
            options: [
              { movie: 'Movie 3.1', isCorrect: false },
              { movie: 'Movie 3.2', isCorrect: false },
              { movie: 'Movie 3.3', isCorrect: true },
              { movie: 'Movie 3.4', isCorrect: false }
            ]
          },
          {
            soundtrack: 'url?',
            options: [
              { movie: 'Movie 4.1', isCorrect: false },
              { movie: 'Movie 4.2', isCorrect: false },
              { movie: 'Movie 4.3', isCorrect: true },
              { movie: 'Movie 4.4', isCorrect: false }
            ]
          },
        ]
      }
    });
  };
}


export function answerCard(answer) {
  return (dispatch) => {
    dispatch({
      type: ANSWER_CARD,
      answer
    });
  };
}
