const fs=require('fs');
const path=require('path') //路径模块
const getFilesInDir=function(dir){
  // console.log(path.resolve(dir)); //E:\workspace\node\fs\txt
  let result=[path.resolve(dir)];
  const files=fs.readdirSync(dir,'utf8');
  // console.log(files);     //['a.txt', 'a.txt.gz', 'b.txt', 'sub']
  files.forEach(file=>{
    file = path.resolve(dir,file)
    // console.log(file);
    const stats = fs.statSync(file);
    if(stats.isFile()){
      result.push(file);
    }else if(stats.isDirectory()){
      result = result.concat(getFilesInDir(file));
    }    
  })
  return result;
}
const files=getFilesInDir('./txt')
console.log(files)

// 输出结果：
// ['E:\\workspace\\node\\fs\\txt',
//   'E:\\workspace\\node\\fs\\txt',
//   'E:\\workspace\\node\\fs\\txt\\a.txt',
//   'E:\\workspace\\node\\fs\\txt',
//   'E:\\workspace\\node\\fs\\txt\\a.txt.gz',
//   'E:\\workspace\\node\\fs\\txt',
//   'E:\\workspace\\node\\fs\\txt\\b.txt',
//   'E:\\workspace\\node\\fs\\txt',
//   'E:\\workspace\\node\\fs\\txt\\sub',
//   'E:\\workspace\\node\\fs\\txt\\sub',
//   'E:\\workspace\\node\\fs\\txt\\sub\\c.txt']