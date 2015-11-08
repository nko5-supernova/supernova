import mongoose from 'mongoose';
import denodeify from 'denodeify';
import { values as getValues } from 'lodash';
import config from '../server/config/config';


beforeEach(function(done) {
  if (config.environment !== 'test') {
    done('Specs must run in test environment.');
    return;
  }

  const removes = getValues(mongoose.models).map(function(model) {
    return denodeify(model.collection.remove).call(model.collection);
  });

  Promise.all(removes).then(function() {
    done();
  }, function(err) {
    console.log('error', err);
    done();
  });
});


process.on('uncaughtException', function(err) {
  console.log(err.stack);
});
