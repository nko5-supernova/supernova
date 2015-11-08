import mongoose from 'mongoose';
import config from './config';
import debug from './debug';


if (config.environment === 'development' || config.environment === 'test') {
  mongoose.set('debug', function(collectionName, method, query, doc, options) {
    debug('mongoose: %s', method);
    if (collectionName) debug('\tcollection:', collectionName);
    if (query) debug('\tquery:', JSON.stringify(query));
    if (doc) debug('\tdoc:', JSON.stringify(doc));
    if (options) debug('\toptions:', options);
  });
}


export default mongoose.connect(
  `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`
);
