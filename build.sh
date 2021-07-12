
pm2 stop dev

output=`git pull origin develop `

rm -rf node_modules

output=`npm install`

npm run build

pm2 start dev

# 启动开发模式
# pm2 start npm --name dev -- run dev
# 启动hooks服务
# pm2 start handleHooks.js --name="hooks"