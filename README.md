## getpic

>获取一个url页面内所有链接的所有图片

###安装

```
npm install getpic
```
###使用方法
>建立一个images文件夹用来保存图片。

>建立一个测试文 件test.js 内容如下：

```
var getimg=require('./index.js');
var url = process.argv[2];
var path = process.argv[3];
path= path || 'images';
getimg(url,path);
```

###在命令行下执行node test.js url path

* url必须以http://开头
* path 是图片保存的路径

### 测试：
```
>node test.js http://www.codetyphon.com images
```

### 关于作者
* [git源](https://github.com/codetyphon/getpic)
* [twitter](http://twitter.com/codetyphon)
* [weibo](http://weibo.com/codetyphon)
* [homePage](http://www.codetyphon.com)