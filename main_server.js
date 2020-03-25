const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
const urlLiB = require('url');
http.createServer((req, res) => {
    // get
    var obj = urlLiB.parse(req.url, true);
    var url = obj.pathname;
    const get = obj.query;
    // post
    var str = '';
    req.on('data', (data) => {
        str += data;
    });
    req.on('end', () => {
        var post = queryString.parse(str);
        // url 要什么
        // get get数据
        // post post数据
        console.log(url, get, post);
    });
    const fileName = './www'+url;
    fs.readFile(fileName,(err,data)=>{
        if(err){
            res.write('404');
        }else{
            res.write(data);
        }
        res.end();
    })
}).listen(8081)