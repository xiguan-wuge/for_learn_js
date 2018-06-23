const http = require('http');
const fs = require('fs');

// 创建一个 web服务器
// req 分析
// res 回应  
const server = http.createServer((req, res) =>{
    // 怎么得到index.html
    if(req.url == '/'){
        // http 响应头
        const indexFile = fs.createReadStream('./index.html');
        res.writeHead(200, {
            'Content-Type': 'textml;charset=utf8'
        })
        indexFile.pipe(res)
    } else if(req.url == '/info'){
        // api 后端
        const info = {
            "username":"小明",
            "desc":"身骑白马"
        };
        // 200 状态码
        // 'Content-Type' 文件格式 返回给浏览器 如何去解析这一次的请求的到达
        res.writeHead(
            200,{
                'Content-Type':'text/plain;charset=utf8'
            }
        )
        res.end(JSON.stringify(info));
    }

    // res.end('hello world, 你要的反正不是首页');
})

server.listen(8081);
