var express         = require('express');
var path            = require('path'); // модуль для парсинга пути
var app             = express();
var url             = require('url');
var value1          = 0;
app.get('/api', function (req, res) {
    res.send('API is running');
});


app.get('/api/setval', function (req, res) {
    var q = url.parse(req.url, true).query;
    value1 = q.value;
    res.send('value is set to ' + value1);
});

app.get('/api/setoperation', function (req, res) {
    
    res.send('value is ' + value1);
});

app.get('/api/getval', function (req, res) {
    
    res.send('value is ' + value1);
});

app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});