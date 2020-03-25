const http = require('http');
http.createServer((req, res) => {
    // post-req on接受post
    req.on('data', (data) => {});
    // post完了调用
    req.end('end', () => {
        
    });
}).listen('8031');