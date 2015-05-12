var Item = require('../models/item');

exports.save = function(name, callback, errback) {
  
  // The findOneAndUpdate method will add a new 
  // item if one does not exist (set upsert to true).
  // we can use this for adding or updating
  Item.findOneAndUpdate({ name: name}, { name: name}, {upsert: true}, function(err, item) {
    if (err) {
      errback(err);
      return;
    }
    callback(item);
  });
  /*
  Item.create({ name: name}, function(err, item) {
    if (err) {
      errback(err);
      return;
    }
    callback(item);
  });
  */
  
};

exports.list = function(callback, errback) {
  Item.find(function(err, items) {
    if (err) {
      errback(err);
      return;
    }
    callback(items);
  });
};