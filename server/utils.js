import { random } from 'lodash';


export function getRandomItems(items, amount) {
  const min = 0;
  const max = items.length - 1;
  const result = [];
  const randomIdxs = [];
  for (let idx = 0; idx < amount; idx++) {
    let randomIdx = random(min, max);
    while (randomIdxs.indexOf(randomIdx) !== -1) {
      randomIdx = random(min, max);
    }
    randomIdxs.push(randomIdx);
    result.push(items[randomIdx]);
  }
  return result;
}
