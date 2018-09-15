const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //set up to use promises
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
}); //set up our server

module.exports = {mongoose};
