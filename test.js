var getimg=require('./index.js');
var url = process.argv[2];
var path = process.argv[3];
path= path || 'images';
getimg(url,path);