
var Item = require('../models/item');

exports.run = function(callback, errback) {
  Item.create({name: 'Broad Beans'},
             {name: 'Tomatoes'},
             {name: 'Peppers'}, function(err, items) {
    if (err) {
      errback(err);
      return;
    }
    callback(items);
  });
};


// I need this explained
// Really, I need to understand the flow of both the seed.js file
// and the server.js file.  In each case, I need to know how/when
// the connection is made to the database.
if (require.main === module) {
  require('./connect');
  exports.run(function() {
    var mongoose = require('mongoose');
    mongoose.disconnect();
  }, function(err) {
    console.error(err);
  });
}