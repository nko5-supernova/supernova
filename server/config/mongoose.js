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


let auth = '';
if (config.mongodb.user && config.mongodb.pass) {
  auth = `${config.mongodb.user}:${config.mongodb.pass}@`;
}


const mongoURI = `mongodb://${auth}${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`;


export default mongoose.connect(mongoURI);
