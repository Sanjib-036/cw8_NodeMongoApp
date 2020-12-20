var http = require('http')
var express = require('express')
var app = express()
var server = http.Server(app)

// your server routes go here
app.get('/', function (request, response) {
    // console.log(request)
    response.sendFile(__dirname + '/index.html')
});
app.get('/second', function (request, response) {
    // console.log(request)
    response.sendFile(__dirname + '/second.html')
});

server.listen(process.env.PORT || 3000,
    process.env.IP || 'localhost', function () {
        console.log('Server running');
    })
module.exports = { app, server }
