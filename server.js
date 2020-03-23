const http = require('http');// 引入模块

const server = http.createServer(function (req,res){// 参数是回调函数,回调函数两个参数，请求和响应
    console.log(req.url);
    // res里面有两个，一个write写，一个end结束
    res.write('abc');
    res.end();
}); // 创建服务器，生成一个服务器对象
// 监听 -- 等着
// 端口 -- 数字，服务以端口来区分
server.listen('8031');