const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
const urlLib = require('url');

var users = {}; // {'lj':'123456'}

http.createServer((req, res) => {
    // 解析数据
    let str = ''
    req.on('data', (data) => {
        str +=data;
    });
    req.on('end', () => {
        const obj = urlLib.parse(req.url, true);
        const url = obj.pathname;
        const get = queryString.parse(str);
        // 区分--接口、文件；怎么区分呢
        if (url == '/user') { //接口 暂时这么区分
            switch(get.act){
                case 'reg':// 注册
                // 检查用户名是否已经有了
                if(users[get.user]){
                    res.write('{"ok":false,"msg":"此用户已存在"}')
                }else{
                    users[get.usrr] = get.pass;
                    res.write('{"ok":true,"msg":"注册成功"}')
                }
                // 插入users
                    break;
                case 'login':// 登录
                // 检查用户是否存在，密码是否正确
                if(users[get.name]!==null){
                    if(users[get.user]!=get.pass){
                        res.write('{"ok":false,"msg":"用户密码不正确"}')
                    }else{
                        res.write('{"ok":true,"msg":"登录成功"}')
                    }
                }else{
                    res.write('{"ok":false,"msg":"此用户不存在"}')
                }
                    break;
                default:
                        res.write('{"ok":false,"msg":"未知的act"}');
                        res.end();
            }
        } else { // 文件
            // 读取文件
            const fileName = './www' + url;
            fs.readFile(fileName, (err, data) => {
                if (err) {
                    res.write('404');
                } else {
                    res.write(data);
                }
                res.end();
            })
        }

    });
}).listen(8031);