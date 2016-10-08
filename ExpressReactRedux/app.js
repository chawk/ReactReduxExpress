var express = require('express')

var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('*', function (req, res) {
    res.render("index");
});

app.listen(3000, function () {
    console.log('listening to this joint on port 3000');
});