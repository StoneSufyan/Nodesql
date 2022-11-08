
const routes = require('./functions')
var express = require('express');
var app = express();

app.get('/', routes.hello )
app.get('/getallbooks', routes.getbooks )
app.post('/buybook' , routes.buybook)
app.post('/buybooks' , routes.buybooks)
// app.post('/buybook' , routes.buybook)
// app.post('/buybook')


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://lacalhost:%s", host, port)
})