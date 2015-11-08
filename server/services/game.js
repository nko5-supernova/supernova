import { Game } from '../models';


export async function create(data) {
  const game = {
    ...data,
    //
    // TODO: create random questions and options
    //
    questions: [
      {
        soundtrack: 'https://soundcloud.com/tfrady/harry-potter-soundtrack-hedwigs-theme',
        options: [
          { movie: 'tt3659388', isCorrect: false }, // The Martian
          { movie: 'tt0241527', isCorrect: true }, // Harry Potter
          { movie: 'tt0120737', isCorrect: false }, // Lord of the Rings
          { movie: 'tt0363771', isCorrect: false } // Narnia
        ]
      },
      {
        soundtrack: 'https://soundcloud.com/alexpfeffer/the-godfather-love-theme-feat',
        options: [
          { movie: 'tt0099685', isCorrect: false },
          { movie: 'tt0111161', isCorrect: false },
          { movie: 'tt0068646', isCorrect: true }, // The godfather
          { movie: 'tt0110912', isCorrect: false }
        ]
      },
      {
        soundtrack: 'https://soundcloud.com/championdnb/true-survivor-champion',
        options: [
          { movie: 'tt0090728', isCorrect: false },
          { movie: 'tt3416742', isCorrect: false },
          { movie: 'tt3472226', isCorrect: true },
          { movie: 'tt1807165', isCorrect: false }
        ]
      },
      {
        soundtrack: 'https://soundcloud.com/hollywoodrecpromo/idina-menzel-let-it-go-from',
        options: [
          { movie: 'tt1772341', isCorrect: false },
          { movie: 'tt1217209', isCorrect: false },
          { movie: 'tt2294629', isCorrect: true },
          { movie: 'tt0398286', isCorrect: false }
        ]
      },
    ]
  };

  return Game.create(game);
}


export async function answer(id, data) {
  const game = await Game.findById(id).exec();
  if (!game) {
    return null;
  }

  const currentQuestion = game.questions
    .findIndex(qst => typeof qst.answered === 'undefined');

  const correctAnswer = game.questions[currentQuestion].options
    .findIndex(opt => opt.isCorrect);

  if (data.answer === correctAnswer) {
    game.points += 10;
  }

  await game.save();

  return { correctAnswer };
}


export function find() {
  return Game.find().exec();
}
