import mongoose from '../config/mongoose';


const schema = mongoose.Schema({
  createdAt: { type: Date },
  finishedAt: { type: Date },
  username: { type: String, required: true },
  points: { type: Number },
  status: { type: String, enum: ['playing', 'finished'] },
  questions: [{
    soundtrack: { type: String, required: true },
    answered: { type: Number },
    correctAnswer: { type: Number, required: true },
    options: [{
      cover: { type: String, required: true },
      title: { type: String, required: true },
    }]
  }]
});


schema.pre('save', function(next) {
  if (this.isNew) {
    this.createdAt = new Date();
    this.points = 0;
    this.status = 'playing';
  }
  next();
});


export default mongoose.model('Game', schema);
