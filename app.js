const express = require("express");
const app = express();

app.get("/user", function(req, res) {

    const user = req.query.user;

    const query = "SELECT * FROM users WHERE username = '" + user + "'";

    console.log(query);

    res.send("User: " + user);
});

app.listen(3000);
