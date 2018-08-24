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

//First Api end point Hello Userin JSOn as well as text format
app.get('/User', function(){
  res.json({"Welcome": "User"});
  res.send("Hello User");
});

app.get('/api/timestamp/:date_string', function(req, res, next){
//converts a date string like 2015-12-25 to milliseconds since epoch
var inTime = req.params.date_string.toString();

//converts above time in milliseconds to Integer 
var inTimeMilliseconds = Number(inTime);

//RegEx Pattern to match the Date in format YYYY-MM-HH
var regExp = /\d{4}-\d{2}-\d{2}/;
var regExpTest = regExp.test(inTime);

// The if statement below gets time in YYYY-MM-HH format and prints result in UTC format
if (regExpTest){
  var millisecondTime = (new Date(inTime).getTime());
  var millisecondTime1 =   millisecondTime / 1000;
  var utc = new Date(millisecondTime).toUTCString();
  res.json({unix: millisecondTime, utc: utc });
}
// The else if code below checks if number is Integer then it gives result in JSON format and time in UTC format
else if(Number.isInteger(inTimeMilliseconds)){
  var utc = new Date(inTimeMilliseconds).toUTCString();
  res.json({unix: inTimeMilliseconds, utc: utc });
}
// If the input is not in valid format then below code is executed
else{
  res.json({"error":"Invalid Date"});
  next();
}
})


app.listen(3000, function(req, res){
    console.log("The server started");
});
