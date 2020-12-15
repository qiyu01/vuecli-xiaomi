
# xiaomirouter

## Project setup
```
npm install
```
# backend start firstly
```
先去backend文件夹找到xiaomi.sql和xiaomi1.sql文件
打开xammpp，启动mysql和apache，打开数据库终端输入
mysql -uroot<xiaomi.sql
按照顺序插入数据 xiaomi.sql -> xiami1.sql 

然后运行
node app.js
```

### Compiles and hot-reloads for development
```
记得返回xiaomi-cli目录
npm install
npm run serve
```
打开浏览器输入http://127.0.0.1:8081/

记得不要输入http://localhost:8081/   因为后端的跨域请求允许的是127.0.0.1:8081。
注意端口号，后端的api占用了8080，因为run serve是开了后端后运行的，所以使用端口8081.如果顺序反了不行 
### Compiles and minifies for production
```

```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
