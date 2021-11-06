var http = require('http');
var fs = require('fs');
const port = 8000;
const hostname = '127.0.0.1';

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

const server = http.createServer(onRequest).listen(port, hostname, () => {
    console.log("Server running at http://127.0.0.1:8000/");
});
