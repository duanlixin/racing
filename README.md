# hooks 配置

配置github

![alt](https://user-images.githubusercontent.com/1913044/124536590-d22c5900-de4a-11eb-99db-9c48cc75dc5c.png)

![alt](https://user-images.githubusercontent.com/1913044/124536839-52eb5500-de4b-11eb-8817-99d28e293cf3.png)

![alt](https://user-images.githubusercontent.com/1913044/124536999-9fcf2b80-de4b-11eb-81e2-38979a9ca951.png)

开发地址

http://ip:3000/

打包后地址

http://ip/

webhooks地址

http://ip:9000/

-------------

## nginx 配置

    第一行
    user  root;

    默认html目录
    location / {
        #root dist;
        root /root/webhooks/dist;
        index  index.html index.htm;
    }

    /usr/local/nginx/nginx -s reload

## host 配置git

    # /etc/host
    github.com 192.30.253.112
    github.global.ssl.fastly.net 151.101.185.194

## 安装nvm 安装node

## 安装git yum install git
