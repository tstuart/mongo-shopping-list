
var express = require('express');
var Item = require('../services/items');
var router = express.Router();

router.get('/items', function(req, res) {
  Item.list(function(items) {
    res.json(items);
  }, function(err) {
    res.status(400).json(err);
  });
});

router.post('/items', function(req, res) {
  Item.save(req.body.name, function(item){
    res.status(201).json(item);    
  }, function(err) {
    res.status(400).json(err);
  });
});

router.delete('/items/:id', function(req, res) {
  var id = req.params.id;
  console.log(id);
  /*
  Item.delete(id, function(item){
    res.status(201).json(item);
  }, function(err) {
    res.status(400).json(err);
  });
  */
});

module.exports = router;