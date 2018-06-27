const fs = require('fs');
const stats=fs.statSync('./c.txt');
console.log(stats.isFile())

// 读取文件状态信息