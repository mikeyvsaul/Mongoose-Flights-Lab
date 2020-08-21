const Flight = require('../models/flight')

module.exports = {
  index,
  show,
  new: newFlight,
  create
}

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { flights });
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    console.log(flight)
    res.render('flights/show', { flight });
  });
}

function newFlight(req, res) {
  const newFlight = new Flight();
  const dt = newFlight.departs;
  const departsDate = dt.toISOString().slice(0, 16);
  res.render('flights/new', {departsDate});
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.render('flights/new');
    res.redirect('/flights');
  })
}
