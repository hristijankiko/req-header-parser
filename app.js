var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/api/whoami', function(req, res){
  let ip, language, software;
  ip = req.ip;
  language = req.headers["accept-language"].split(',')[0];
  software = req.headers["user-agent"].replace('(', ',').replace(')', ',').split(',')[1];
  let info = {
    ip: ip,
    language: language,
    software: software
  };
  res.json(info)
})

app.listen(process.env.PORT || 3000, function(req, res){
  console.log("Listening at port 3000.");
});