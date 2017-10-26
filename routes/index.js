var express = require('express');
var router = express.Router();
var fs = require('fs')
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123woaini'
});


/* GET home page. */
router.post('/', function(req, res, next) {
  connection.connect();
  res.header('Access-Control-Allow-Origin',"*")
  connection.query('SELECT title FROM claxx.1701b', function(err, rows, fields) {
    
    res.send(rows)
   
  });
  
  connection.end();
});

module.exports = router;