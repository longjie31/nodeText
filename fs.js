const fs = require('fs');
// 读文件readFile（文件名，回调函数）文件操作很慢，肯定不是同步操作
/* fs.readFile('a.txt',function(err,data){// 有两个参数，错误信息和数据
    if(err){
        console.log('读取失败');
    }else{
        console.log(data.toString());
    }
}); */
// 写文件writeFile(文件名，内容，回调函数)
fs.writeFile('bbb.txt','123',function(err){
    console.log(err);
});