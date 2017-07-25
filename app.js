var express = require('express');
var app = express();
var path = require("path");
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

var appData =  {
                  'data': [{'title': 'Mountains', 'url': 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Alai_Mountains.jpg'},
                           {'title': 'Beach', 'url': 'http://www.publicdomainpictures.net/pictures/150000/velka/tropical-beach-1454007190ZAK.jpg'},
                           {'title': 'City', 'url': 'http://1069thefox.com/wp-content/blogs.dir/8/files/2015/02/city.jpg'},]
               };

app.set('port', process.env.PORT || 3000);
app.use(express.static('site'));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
   res.render('home', appData);
});

app.listen(app.get('port'), function() {
   console.log('Express started on port: ' + this.address().port + ' ...Press Ctrl-C to stop.');
});
