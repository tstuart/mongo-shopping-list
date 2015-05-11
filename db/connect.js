var mongoose = require('mongoose');
var env = require('../environmnet');
var config = require('./config');

mongoose.connect(config[env].url);