var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000 || process.env.PORT;


app.use(express.urlencoded({
  extended:true
}))
 app.use(express.json())

 require("./apiroutes")(app);
 require("./htmlroutes")(app);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  