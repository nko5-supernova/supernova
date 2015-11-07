import { Game } from '../models';


export async function create(data) {
  return Game.create(data);
}


export function find() {
  return Game.find().exec();
}
