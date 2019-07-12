// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var Appointment = sequelize.define("appointment", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    autoIncrement: true
  },
  student_id: {
    type: Sequelize.INTEGER
  },
  tutor_id: {
    type: Sequelize.INTEGER
  },
  subject_id: {
    type: Sequelize.INTEGER
  },
  start_time: {
    type: Sequelize.DATE
  },
  end_time: {
    type: Sequelize.DATE
  },
  session_price: {
    type: Sequelize.DECIMAL
  },
  session_notes: {
    type: Sequelize.TEXT
  }

});

// Syncs with DB
Appointment.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Appointment;