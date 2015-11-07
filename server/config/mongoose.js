import config from './config';
import mongoose from 'mongoose';


if (config.environment === 'development' || config.environment === 'test') {
  mongoose.set('debug', function(collectionName, method, query, doc, options) {
    console.log('mongoose: %s', method);
    if (collectionName) console.log('\tcollection:', collectionName);
    if (query) console.log('\tquery:', JSON.stringify(query));
    if (doc) console.log('\tdoc:', JSON.stringify(doc));
    if (options) console.log('\toptions:', options);
  });
}


export default mongoose.connect(
  `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`
);
