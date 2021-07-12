const http = require('http')
const spawn = require('child_process').spawn
const createHandler = require('github-webhook-handler')
const handler = createHandler({
  path: '/',
  // hooks密码
  secret: 'sports'
})

http.createServer((req, res) => {
  handler(req, res, function(err) {
    res.statusCode = 404
    res.end('hooks page')
  })
  // hooks端口
}).listen(9000)

handler.on('error', err => {
  console.error('Error:', err.message)
})

// 接收hooks事件
handler.on('push', e => {
  try {
    // 执行hooks脚本
    spawn('sh', ['./build.sh'], {})
  }
  catch (e) {}
})