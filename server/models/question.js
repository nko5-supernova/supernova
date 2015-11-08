import mongoose from '../config/mongoose';


const schema = mongoose.Schema({
  soundtrack: { type: String, required: true },
  movie: { type: String, required: true },
});


export default mongoose.model('Question', schema);
