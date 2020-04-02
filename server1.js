const express = require('express');
const bodyParser = require('body-parser');

const server = express();
server.listen(8080);

server.use(bodyParser.urlencoded({
    extended:false,// 一般用不着
    limit:2*1024*1024
}));// 两个参数，一个扩展模式boolean，true启用扩展模式 第二个limit就是一个限制，最多多大的数据
// get,post
server.use('/', (req, res) => {
    // get
    debugger;
    console.log(req.body); //post 
});
