const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api/resume', { target: 'http://localhost:8081' }));
};