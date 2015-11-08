const defaultHandler = function(err, req, res, next) {
  /* eslint no-unused-vars:0  */
  console.log('>ERROR', err);
  res.status(err.status_code || 500);

  if (err.status_code === 400) return res.send(err);

  if (!err.status_code || err.status_code >= 500) {
    console.error(err.stack || err);
  }

  res.end();
};


export default [
  /**
    Passes the error through the many special handlers
    that will convert an error to a known format.
   */
  // add custom handlers here,
  require('./mongoose'),

  /**
    Handles the error, giving a response to the user and logging the information.
   */
  defaultHandler,
];
