const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const server = express();

// cookie
server.use(cookieParser());
// 要放在cookie后面
server.use(cookieSession(
    {
        name:'sess',// session名字
        keys: ['affaf', 'gdfgfd', 'regd'],// 设置session需要的keys 循环用这些keys加密
        maxAge:30*24*3600*1000 // session有效期
    }
));
server.use('/', (req, res) => {
    if(req.session['count']===null){
        req.session['count'] = 1;// 虽然不是浏览器传的，但是是一个输入性的东西
    }else{
        req.session['count']++;
    }
    console.log(req.session['count']);
    res.send('ok');
})
server.listen(8080);
