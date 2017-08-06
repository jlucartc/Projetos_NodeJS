var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/Bebidas');

module.exports = db;
