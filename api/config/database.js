var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/criminals-app');

module.exports = mongoose;
