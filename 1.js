const jade = require('jade');

let str = jade.renderFile('./view/1.jade',{pretty:true});

console.log(str);