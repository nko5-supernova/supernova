export const START_TURN = 'START_TURN';
export const FINISH_TURN = 'FINISH_TURN';

export function startTurn() {
  return { type: START_TURN };
}

export function finishTurn() {
  return { type: FINISH_TURN };
}
