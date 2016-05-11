var mongoose = require('./database');

var Criminal = require('../models/Criminal');

var criminals = [
  {"name": "Blorp Florp McRichards", location: "Bahamas", status: "unknown"},
  {"name": "John MuscleBrain Adams", location: "France", status: "dead"},
  {"name": "Blogpost Dorgabn", location: "North Carolina", status: "dead"}
];

Criminal.remove({}, function(err) {
  if (err) console.log(err);
  Criminal.create(criminals, function(err, criminals) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + criminals.length  + " criminals.");
      mongoose.connection.close();
    }
    process.exit();
  });
});
