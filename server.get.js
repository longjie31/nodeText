const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    console.log(req.url);
    const fileName = './www' + req.url;
    fs.readFile(fileName, (err, data) => {
        if(err){
            res.write('404');
        }else{
            res.write(data)
        }
        res.end();
    });
    // req获取前台请求数据
}).listen('8031');