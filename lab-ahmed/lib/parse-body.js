'use strict';

module.exports = function(req, callback) {
  req.body = '';

  req.on('data', function(data) {
    req.body += data.toString();
  });
};