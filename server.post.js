const http = require('http');
http.createServer((req, res) => {
    // post-req on接受post
    req.on('data',()=>{});
    req.end();
}).listen('8031');