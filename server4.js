const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const server = express();
server.listen(8080);
// cookie
server.use(cookieParser('adsfasfasf'));
// 要放在cookie后面
server.use(cookieSession);
server.use('/aaa/a.html', (req, res) => {
    res.clearCookie('user');
    res.send('ok');
    /*  console.log('未签名的cookie', req.cookies);
    console.log('签了名的cookie', req.signedCookies);
    res.send('ok'); */
    // maxAge存放多久，这里设置为30天，path设置在哪个路径下，可以读取这个cookie
    /* req.secret = 'adsfasfasf';
    res.cookie('user','lj',{path:'/aaa',maxAge:30*24*3600*1000,signed:true});
    res.send('ok'); */
})
// 同一个路径就构成了链式操作
/* server.use('/', (req, res,next) => {
    console.log('a');
    next();
});
server.use('/', (req, res,next) => {
    console.log('b');
}); */