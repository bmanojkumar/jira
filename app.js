var express = require('express');
var bodyParser = require('body-parser');
var job = require("./schedule.js");

job.start();

var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var routes = require("./routes/routes.js")(app);

var server = app.listen(port, function () {
    console.log("Listening on port %s...", server.address().port);
});




