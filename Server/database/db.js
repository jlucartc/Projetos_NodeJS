var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bebidas');

module.exports = db;
