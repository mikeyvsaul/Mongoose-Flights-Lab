const Flight = require('../models/flight');

module.exports = {
  create,
  delete: deleteDestination
};

function create(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.destinations.push(req.body);
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}

function deleteDestination(req, res) {
  Flight.findOne({'destinations._id': req.params.id}, function(err, flight) {
    const destSubdoc = flight.destinations.id(req.params.id);
    destSubdoc.remove();
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}