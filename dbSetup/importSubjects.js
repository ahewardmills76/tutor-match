var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "PassWord!",
  database: "tutor_match_db"
});
// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    var lineReader = require('readline').createInterface({
      input: require('fs').createReadStream('subjects.csv')
    });
    
    lineReader.on('line', function (line) {
      var data = line.split(",");
      var importObject = {
        id: parseInt(data[0]),
        subject_name: (data[1])
    }
      connection.query('insert into subjects set ?', importObject, function(err, res) {
          console.log(res + " subjects inserted!\n");
        })
    });
  });