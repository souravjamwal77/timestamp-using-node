var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())

//serving static files
app.use(express.static('public'));

//Home page

app.get('/', function(req, res){
    res.send("Welcome to Home Page");
    //res.sendFile(__dirname + 'views/index.html');
})




app.listen(3000, function(req, res){
    console.log("The server started");
});
