var http = require('http')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var server = http.Server(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// your server routes go here
app.get('/', function (request, response) {
    // console.log(request)
    response.sendFile(__dirname + '/index.html')
});
app.get('/second', function (request, response) {
    // console.log(request)
    response.sendFile(__dirname + '/second.html')
});
app.get('/article/form', function (request, response) {
    // console.log(request)
    response.sendFile(__dirname + '/form.html')
});
var articles = [];
app.post('/article/new', function (request, response) {
    //console.log('post request');

    let newArticle = request.body;
    if (newArticle.name) {
        articles.push(request.body);
        console.log(articles)
        response.json(articles);

    }
    else {
        response.status(400).json({
            msg: 'No title Added'
        });
    }


})

server.listen(process.env.PORT || 3000,
    process.env.IP || 'localhost', function () {
        console.log('Server running');
    })
module.exports = { app, server }
