var http = require('http');
var fs = require('fs');
var conn = require('connect');

var app = conn();
const hostname = '127.0.0.1';
const port = 3001;
/*
function doOne(req, res, next){
  console.log("doOne");
  next()
}
function doTwo(req, res, next){
  console.log("doTwo");
  next()
}
app.use(doOne);
app.use(doTwo);
*/
function email(req, res){
  console.log('user require email');
}
app.use('/email', email);

http.createServer(app).listen(3000);
/*
function send404Respongse(response){
    response.writeHead(404, {"Content-Type":"text/plain"});
    response.write("404 Error: Sorry!");
    response.end();
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  if(req.method=='GET' && req.url=='/'){
//    res.setHeader('Content-Type', 'application/js');
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./index.html').pipe(res);
//    fs.createReadStream('../client/index.js').pipe(res);
    }
  else{
      send404Respongse(res);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/