/* 
var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({

    host : "localhost",
    user: "root",
    password : "passoword",
    database : "smsapi",
    multipleStatements : true
  
  })
  mysqlConnection.connect((err)=>{
    if(!err){
      console.log("Connection succed")
    }
    else{
      console.log("Connection Failled")
  
    }
  });

  module.exports = mysqlConnection; */