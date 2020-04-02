const ejs = require('ejs');
ejs.renderFile('./view/1.ejs',{name:'lj'},(err,data)=>{
    if(err){
        console.log('编译失败');
    }else{
        console.log('编译成功');
        console.log(data);
    }
})