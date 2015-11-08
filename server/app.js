import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import { environment } from './config/config';


const app = express();


app.use(bodyParser.json());


if (environment === 'development') {
  const webpack = require('webpack');
  const config = require('../webpack.config');
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    }
  }));

  app.use(require('webpack-hot-middleware')(compiler));
} else {
  app.use('/static', express.static(path.join(__dirname, '../dist')));
}

// Rest APIs
app.use('/api', require('./api'));


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});


app.use(require('./middlewares/errors'));


export default app;
