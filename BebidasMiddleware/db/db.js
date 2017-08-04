var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/Bebidas');

exports.db = db;
