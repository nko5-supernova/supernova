export function detail(data) {
  const result = { ...data.toObject() };

  result.questions = result.questions.map((question) => {
    delete question.correctAnswer;
    return question;
  });

  return result;
}


export function leaderboard(data) {
  return {
    list: data
  };
}
