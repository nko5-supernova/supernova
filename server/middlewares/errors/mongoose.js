export default function(err, req, res, next) {
  if (err.name !== 'ValidationError') return next(err);

  next({
    status_code: 400,
    name: 'ValidationError',
    errors: err.errors,
  });
}
