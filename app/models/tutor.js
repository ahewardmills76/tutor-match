// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var Tutor = sequelize.define("tutor", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  },
  hourly_rate: {
    type: Sequelize.DECIMAL
  },
  email: {
    type: Sequelize.STRING
  },
  phone_number: {
    type: Sequelize.STRING}

});

// Syncs with DB
Tutor.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Tutor;