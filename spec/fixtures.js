import {Game} from '../server/models';


export function fixtureGame(data) {
  const defaultData = {
    points: 0,
    createdAt: new Date(2015, 10, 1, 15, 2, 10),
    finishedAt: new Date(2015, 10, 1, 15, 2, 20),
    username: 'maxcnunes',
    questions: [
      {
        soundtrack: 'https://soundcloud.com/alexpfeffer/the-godfather-love-theme-feat',
        correctAnswer: 2,
        options: [
          { title: 'Il Divo', cover: 'http://image.tmdb.org/t/p//w185//9hSnDVvrI2JXP6oAXvGJW4OLF19.jpg' },
          { title: 'L\'onorata famiglia', cover: 'http://image.tmdb.org/t/p//w185/null' },
          { title: 'The Godfather', cover: 'http://image.tmdb.org/t/p//w185//d4KNaTrltq6bpkFS01pYtyXa09m.jpg' },
          { title: 'Golden Door', cover: 'http://image.tmdb.org/t/p//w185//hj4p0Q8Nzbo5eInmISqVROCVWzJ.jpg' }
        ]
      },
      {
        soundtrack: 'https://soundcloud.com/felipe-sgarbosa/youve-got-a-friend-in-me-toy',
        correctAnswer: 3,
        options: [
          { title: 'Batman Begins', cover: 'http://image.tmdb.org/t/p//w185//mYsoCOq82b08juHGxd3WnotiCAh.jpg' },
          { title: 'Batman Begins', cover: 'http://image.tmdb.org/t/p//w185//mYsoCOq82b08juHGxd3WnotiCAh.jpg' },
          { title: 'Ted', cover: 'http://image.tmdb.org/t/p//w185//yLdP2vDa1BqxLSbikGypGtAEOGe.jpg' },
          { title: 'Toy Story', cover: 'http://image.tmdb.org/t/p//w185//agy8DheVu5zpQFbXfAdvYivF2FU.jpg' }
        ]
      },
      {
        soundtrack: 'https://soundcloud.com/championdnb/true-survivor-champion',
        correctAnswer: 1,
        options: [
           { title: 'Jurassic Park', cover: 'http://image.tmdb.org/t/p//w185//msfyV01zy5dxy4JlXCpEVFRXwGO.jpg' },
           { title: 'Kung Fury', cover: 'http://image.tmdb.org/t/p//w185//oJWzpGCLIj3uYa0ux19T2WwzTOf.jpg' },
           { title: 'Star Trek', cover: 'http://image.tmdb.org/t/p//w185//eD7hpgRsI8YFLZkTD7f2MR2HSnh.jpg' },
           { title: 'Jurassic World', cover: 'http://image.tmdb.org/t/p//w185//jjBgi2r5cRt36xF6iNUEhzscEcb.jpg' }
        ]
      },
      {
        soundtrack: 'https://soundcloud.com/alexpfeffer/the-godfather-love-theme-feat',
        correctAnswer: 3,
        options: [
          { title: 'Avanti!', cover: 'http://image.tmdb.org/t/p//w185//qLpMjybdHfDocEJ9mkFDda9lXDI.jpg' },
          { title: 'Trial by Jury', cover: 'http://image.tmdb.org/t/p//w185//ojM2e9vd8tVOzas4DFs2Gcy9l14.jpg' },
          { title: 'Young and Healthy as a Rose', cover: 'http://image.tmdb.org/t/p//w185//ju1mgUuSlFJVPD0jJwPtcOyy15Z.jpg' },
          { title: 'The Godfather', cover: 'http://image.tmdb.org/t/p//w185//d4KNaTrltq6bpkFS01pYtyXa09m.jpg' }
        ]
      },
      {
        soundtrack: 'https://soundcloud.com/alexpfeffer/the-godfather-love-theme-feat',
        correctAnswer: 2,
        options: [
          { title: 'In with Thieves', cover: 'http://image.tmdb.org/t/p//w185//r5dwXxlBtJkHcHv62L8Qbwga9Mp.jpg', },
          { title: 'In with Thieves', cover: 'http://image.tmdb.org/t/p//w185//r5dwXxlBtJkHcHv62L8Qbwga9Mp.jpg', },
          { title: 'The Godfather', cover: 'http://image.tmdb.org/t/p//w185//d4KNaTrltq6bpkFS01pYtyXa09m.jpg' },
          { title: 'Ruby', cover: 'http://image.tmdb.org/t/p//w185//muHJrhYbztfNJQm1hWBilsE08Ab.jpg' }
        ]
      }
    ]
  };

  return {
    ...defaultData,
    ...data
  };
}


export async function createGame(data) {
  const _data = fixtureGame(data);
  const game = await Game.create(_data);

  await Game.update(
    { _id: game.id },
    { $set: { ..._data } },
    { multi: true }
  ).exec();
}
