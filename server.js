var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
mongoose.Promise = require('bluebird');
mongoose.connect("mongodb://localhost/angulartodo");

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded ({ extended:true }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + '/app'));
app.set('port', (process.env.PORT || 5000));

var db = mongoose.connection;
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// require('./app/api/routes.js')(app);
//
// app.listen(app.get('port'), function() {
//     console.log('Node app is running on port', app.get('port'));
// });

app.listen(3000, function() {
    console.log("App running on port 3000!");
});
