import mongoose from '../config/mongoose';


const schema = mongoose.Schema({
  createdAt: { type: Date },
  finishedAt: { type: Date },
  username: { type: String, required: true },
  points: { type: Number },
  questions: [{
    soundtrack: { type: String, required: true },
    answered: { type: Number },
    answeredCorrect: { type: Number },
    options: [{
      movie: { type: String, required: true },
      isCorrect: { type: Boolean, required: true }
    }]
  }]
});


schema.pre('save', function(next) {
  if (this.isNew) {
    this.createdAt = new Date();
    this.points = 0;
  }
  next();
});


export default mongoose.model('Game', schema);
