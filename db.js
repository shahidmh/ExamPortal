// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/mydb1');


var mongoose = require('mongoose');
var env = require('dotenv').load();
COSMOSDB_CONNSTR="mongodb://portal2018:df4Xz3DN5NFDgJ6vsDMkS7yct4zUppTK0nrAlKqBRjhBndpWvLQcK7ulPlyJ2vEvpp1DuWgY8ljgHLThOGe3OA==@portal2018.documents.azure.com:10255/?ssl=true"
COSMOSDB_DBNAME="portal2018"

mongoose.connect(process.env.COSMOSDB_CONNSTR+process.env.COSMOSDB_DBNAME+"?ssl=true&replicaSet=globaldb"); //Creates a new DB, if it doesn't already exist

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log("Connected to DB");
});