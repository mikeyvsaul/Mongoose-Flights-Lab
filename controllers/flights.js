const Flight = require('../models/flight')
const { Model } = require('mongoose');

module.exports = {
  index
}

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { flights });
  });
}