const fs=require('fs');
let data;
try{
  data=fs.readFileSync('./file2.txt','utf8');
  console.log('文件读取完成');
console.log('文件内容'+data);
}catch(err){
  console.error('读取文件错误'+err.message)
}

