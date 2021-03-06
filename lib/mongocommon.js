/* ~ Application dependencies ~ */

var debug = require('debug')('tock-mongocommon')
    , envcfg = require('envcfg')
    , config = envcfg(__dirname + '/config.json')
    , mongoose = require('mongoose')
    , logger = require('./logger');

// Create our mongodb client and handle errors
var mongoConnectionString = 'mongodb://';

if (config.mongo.user && config.mongo.password) {
  mongoConnectionString += config.mongo.user + ':' + config.mongo.password + '@';
}

mongoConnectionString += config.mongo.host + '/' + config.mongo.dbName;

// Connect to mongo
mongoose.connect(mongoConnectionString, function(err) {
  if (err) {
    logger.error(err, mongoConnectionString);
  }
});

exports = module.exports = mongoose;
