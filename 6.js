const fs=require('fs');
const writeStream=fs.createWriteStream('./c.txt','utf8');


writeStream
  .on('close',()=>{
    console.log('已经关闭了')
  });
writeStream.write('you');
writeStream.write(' are');
writeStream.end('')

// 在文件中写入 但是把之前的数据覆盖了