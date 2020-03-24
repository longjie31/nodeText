const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
const urlLib = require('url');
http.createServer((req, res) => {
    // true解析url里的query
    console.log(req.url);
    const obj = urlLib.parse(req.url, true);
    console.log(obj);
    /*  const json = queryString.parse('user=blue&pass=123&age=18');
     console.log(json); */
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