var http = require('http');
var fs = require('fs');

// server object loomine
http.createServer(function(req,res) {
    fs.readFile('demofile1.html', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});
}).listen(8080); // Response is listened at port 8080