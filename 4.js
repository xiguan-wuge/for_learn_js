const fs =require('fs');
const readStream= fs.createReadStream('./a.txt','utf8');
readStream
  .on('data',(chunk)=>{
    console.log('读取到数据----------\n'+chunk);
  })
  .on('error',(err)=>{
    console.log('出错了'+err.message);
  })
  .on('end',()=>{
    console.log('没有数据了');
  })
  .on('close',()=>{
    console.log('已经关闭')
  })
// node 运行环境是服务器
// 当文件内容很大时 可以创建一个可读流 ，让文件慢慢流出来