var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000 || process.env.PORT;


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  
  
app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });
  

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  