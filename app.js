var express = require('express');
var app = express();
var path = require("path");

app.set('port', process.env.PORT || 3000);
app.use(express.static('site'))

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname + '/site/index.html'));
});

app.listen(app.get('port'), function() {
   console.log('Express started...Press Ctrl-C to stop.');
});
