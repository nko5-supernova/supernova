import mongoose from '../config/mongoose';


const schema = mongoose.Schema({
  soundtrack: { type: String, required: true },
  imdbId: { type: String, required: true },
});


export default mongoose.model('Movie', schema);
