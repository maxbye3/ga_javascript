const http = require('http');
const url = require('url');
http.createServer(onRequest).listen(8888);
console.log('server has started');
let pathname = '';
function showPage(response) {
    if (pathname === '/') {
        response.writeHead(200, { 'content- type': 'text / html' });
        response.write('Hello World');
        response.end();
    } else {
        response.writeHead(400, { 'content- type': 'text / html' });
        response.write('Error 400');
        response.end();
    }
}
function onRequest(request, response) {
    pathname = url.parse(request.url).pathname;
    console.log(pathname);
    showPage(response);
}