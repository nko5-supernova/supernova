const server = {};


server.app = require('./app');


server.start = function() {
  const config = require('./config/config');

  const { host, port } = config.http;

  server.app.listen(port, host, () => {
    console.log(`Server started at [ http://${host}:${port} ]`);
  });
};


export default server;
