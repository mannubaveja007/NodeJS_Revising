console.log("Heyyy we are going to try MySQL module here in node js")


var mysql = require("mysql2")

var con= mysql.createConnection({
    host:"localhost",
    user: "username",
    password: "password"
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

    con.query("create database merchants;",function(err,result){
        if(err) throw err;
        console.log("Database created");
    });
// # check if db is created or not 
    con.query("show databases;",function(err,result){
        if(err) throw err;
        console.log(result)
    })
// # to use Node SQL db
    con.query("use merchants;",function(err,result){
        if(err) throw err;
        console.log("Using merchants db")
    });

    con.query("CREATE TABLE PayME_merchants (merchant_id int AUTO_INCREMENT PRIMARY KEY , name varchar(255), address varchar(255))",function(err,result){
        if (err) throw err;
        console.log("Table created : PayME_merchants")
    });
// # show/list tables
    con.query("show tables;",function(err,result){
        if(err) throw err;
        console.log(result);
    })


    /////// $ let's insert somevalues in tables 
    con.query("insert into PayME_merchants values(1,'Abhishek shekhawat','Gujrat');",function(err,result){
        if(err) throw err;
        console.log("1,Abhishek shekhawat,Gujrat is inserted into the table");
    });
    
    con.query("insert into PayME_merchants values(2,'Aman Bachan','mumbai');",function(err,result){
        if(err) throw err;
        console.log("2,Aman Bachan,mumbai is inserted into the table");
    });

    // # bulk queries

    var sql = "INSERT INTO PayME_merchants (merchant_id, name ,address) VALUES ?";
    var values = [
        [3, 'Aman Bachan', 'Mumbai'],
        [4, 'Raj Gupta', 'Delhi'],
        [5, 'Priya Mehta', 'Kolkata'],
        [6, 'Siddharth Singh', 'Bangalore'],
        [7, 'Neha Sharma', 'Hyderabad'],
        [8, 'Rohit Desai', 'Chennai'],
        [9, 'Anjali Patel', 'Pune'],
        [10, 'Karan Kapoor', 'Ahmedabad'],
        [11, 'Pooja Iyer', 'Jaipur'],
        [12, 'Arjun Verma', 'Lucknow'],
        [13, 'Divya Sharma', 'Patna'],
        [14, 'Saurav Mishra', 'Indore'],
        [15, 'Meera Chauhan', 'Chandigarh'],
        [16, 'Nisha Agrawal', 'Surat']
    ];

    con.query(sql,[values],function(err,result){
        if(err) throw err;
        console.log("Number of rows inserted in the PayME_Merchants :- "+result.affectedRows);
    })


    // # displaying all the details:-
    con.query("select * from PayME_merchants;",function(err,result){
        if(err) throw err;
        console.log(result);
    })
    console.log("\nThank you for using this project!");
    
  });

