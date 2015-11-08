import { shuffle } from 'lodash';
import { Game, Movie } from '../models';
import { theMovieDBClient } from '../clients';
import { getRandomItems } from '../utils';


const AMOUNT_QUESTIONS_PER_GAME = 5;
const AMOUNT_OPTIONS_PER_QUESTION = 4;


export async function create(data) {
  const movies = await Movie.find().exec();
  // Is not so simple get random from mongo
  // lets do it in memory for now...
  const randomMovies = getRandomItems(movies, AMOUNT_QUESTIONS_PER_GAME);

  const questionPromises = randomMovies.map(async movie => {
    const movieDetail = await theMovieDBClient.getMovieByIMDBId(movie.imdbId);

    const amountSimilar = AMOUNT_OPTIONS_PER_QUESTION - 1;
    const similarMovies = await theMovieDBClient
      .getSimilarMoviesByIMDBID(movie.imdbId, amountSimilar);

    const options = shuffle([
      movieDetail,
      ...similarMovies
    ]);

    const correctAnswer = options.findIndex(opt => opt.title === movieDetail.title);

    return {
      soundtrack: movie.soundtrack,
      options,
      correctAnswer
    };
  });


  const game = {
    username: data.username,
    questions: await Promise.all(questionPromises)
  };

  return Game.create(game);
}


export async function answer(id, data) {
  const game = await Game.findById(id).exec();
  if (!game) {
    return null;
  }

  if (game.status !== 'playing') {
    return null;
  }

  const currentQuestionIndex = game.questions.findIndex(qst => typeof qst.answered === 'undefined');
  const currentQuestion = game.questions[currentQuestionIndex];

  if (data.answer === currentQuestion.correctAnswer) {
    game.points += ((data.fraction || 0) * 10);
  }

  if (currentQuestionIndex === game.questions.length - 1) {
    game.status = 'finished';
  }

  currentQuestion.answered = data.answer;
  await game.save();

  return { correctAnswer: currentQuestion.correctAnswer };
}


export async function leaderboard() {
  const data = await Game.aggregate([
    {
      $match: { status: 'finished' }
    },
    {
      $group: {
        _id: '$username',
        points: { $sum: '$points' }
      }
    },
    {
      $sort: { points: -1 }
    }
  ]).exec();

  return data.map(item => ({ username: item._id, points: item.points }));
}
