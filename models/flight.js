const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  arrival: {
    type: Date,
    default: function() {
      const nd = new Date();
      return nd.setFullYear(nd.getFullYear() + 1)
    }
  }
  
}, {
  timestamps: true
});

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Delta', 'Southwest', 'United'],
  },
  airport: {
    type: String,
    enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  }, 
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: function() {
      const nd = new Date();
      return nd.setFullYear(nd.getFullYear() + 1)
    }
  },
  destinations: [destinationSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);