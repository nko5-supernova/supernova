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
    database: process.env.MONGO_DATABASE
  }
};
