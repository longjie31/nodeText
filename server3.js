const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    // req.url=>'./index.html'
    // 读取=>'./www/index.html'
    // './www'+req.url
    const fileName = './www' + req.url;
    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.write('404');
        } else {
            res.write(data);
        }
        res.end();
    })
});
server.listen('8031');