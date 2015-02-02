## getpic
获取一个url页面内所有链接的所有图片
* 安装
```
npm install getpic
```
* 使用方法

 ** 建立一个images文件夹。
 ** test.js文件内容如下：
```
var getimg=require('./index.js');
var url = process.argv[2];
var path = process.argv[3];
path= path || 'images';
getimg(url,path);
```

 ** 在命令行下执行test.js：带参数的，分别为 url 和 保存路径 （url必须以http://开头）

```
>node test.js http://www.codetyphon.com images
```
