const express = require("express");

const app = express();

app.get("/user", function(req, res) {

    const user = req.query.user;

    console.log("User is: " + user);

    // Intentional security issue for SonarQube demo
    eval(user);

    res.send("User: " + user);
});

app.listen(3000);

