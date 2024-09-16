console.log("Heyyy we are going to try MySQL module here in node js")


var mysql = require("mysql2")

var con= mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "jesterinsan28"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    // # show databases
    con.query("show databases;", function (err, result) {
      if (err) throw err;
      console.log("Database list");
      console.log(result);

    });

    con.query("create database NodeSQL;",function(err,result){
        if(err) throw err;
        console.log("Database created");
    });
// # to use Node SQL db
    con.query("use NodeSQL;",function(err,result){
        if(err) throw err;
        console.log("Using NodeSQL db")
    });

    con.query("CREATE TABLE PayME_merchants (name VARCHAR(255), address VARCHAR(255))",function(err,result){
        if (err) throw err;
        console.log("Table created : PayME_merchants")
    });
  });

