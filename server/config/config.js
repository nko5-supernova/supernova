import url from 'url';

export default {
  environment: process.env.NODE_ENV || 'development',

  http: {
    host: process.env.HTTP_HOST || '0.0.0.0',
    port: process.env.PORT || '3000'
  },

  mongodb: {
    host: url.parse(process.env.MONGO_PORT).hostname,
    port: url.parse(process.env.MONGO_PORT).port,
    database: process.env.MONGO_DATABASE,
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS
  },

  theMovieDBAPIURL: 'http://api.themoviedb.org',
  theMovieDBAPIKey: process.env.THEMOVIEDB_API_KEY
};
