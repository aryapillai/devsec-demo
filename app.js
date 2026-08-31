const express = require("express"); 
const app = express(); 
const dbPassword = "MySecretPassword123";
app.get("/", function(req, res) { 
res.send("Hello DevSecOps"); 
}); 
app.listen(3000);
