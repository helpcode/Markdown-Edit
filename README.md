<p align="center">
    <img src="./public/images/markdown.png"/>
</p>
<p align="center">
  DBeditor The Best MarkDown Editor
</p>
<p align="center">
  <a href="https://github.com/helpcode/Node-Crawler/"><img src="https://img.shields.io/travis/rust-lang/rust.svg" alt="rust"></a>
  <a href="https://nodejs.org/en/download/"><img src="https://img.shields.io/badge/node.js-6.11.1-blue.svg" alt="nodejs"></a>
  <a href="https://img.shields.io/packagist/l/doctrine/orm.svg"><img src="https://img.shields.io/packagist/l/doctrine/orm.svg" alt="orm"></a>

</p>

## 简介

`DBeditor` 是一款跨平台的`MarkDown`编辑器，支持主流的`Linux` / `Mac` / `Windows` 等操作系统，在各个系统上具有统一优秀的表现力。界面设计采用简洁扁平的UI风格，去除繁琐复杂多余的菜单，借鉴`Linux`上著名的`Vim`编辑器键盘快捷键命令操作风格，让用更加专注于文章博客的编写。


> DBeditor名称的来源：我养了一条日天日地的黑色小泰迪，它名字叫大(D)宝(B)。哈哈...就是如此随意

**项目地址：**

- 1：源码地址：https://github.com/helpcode/DBeditor
- 2：文档地址：https://helpcode.github.io/DBeditor/
- 3：下载地址：https://github.com/helpcode/DBeditor/releases
- 4：官网地址：http://localhost:3000/introduce
 
## 安装构建

1：下载源码

```bash
sudo mkdir Markdown-Edit && sudo chmod 777 -R Markdown-Edit && cd Markdown-Edit
sudo git clone https://github.com/helpcode/DBeditor.git
sudo npm install
``` 

安装解决依赖后打开`package.json`，`scripts`字段中提供有如下命令：

```bash
"scripts": {
    # dev阶段通过nw查看运行效果，
    # 需要npm安装 nw，参见：https://github.com/nwjs/npm-installer
    "dev": "nw /home/bmy/桌面/DBeditor/Markdown-Edit",
    # 同上
    "nw": "nw",
    
    # 本地web方式运行网站，node-dev 需要自己安装不要问我
    # 访问地址http://localhost:3000/welcome
    "node": "node-dev ./bin/www",
    
    # 这里是你需要配置的 nw-builder
    # linux64为打包平台，包会根据这个参数自动去下载对应SDK
    # --buildDir 为打包成功输出目录，默认build
    # /home/bmy/桌面/Markdown-Edit/ 是项目绝对路径
    "prod": "nwbuild --platforms linux64 --buildDir dist/ /home/bmy/桌面/DBeditor/Markdown-Edit/",
    
    # 这个是我自己写的 Linux shell 脚本，具体源码和使用请看 
    # https://helpcode.github.io/DBeditor/#/?id=开始打包
    "online": "./../builder.sh",
    
    # 这个是 docute 项目文档运行命令
    "docs": "docute ./docs --out-dir dist --source-maps --presets env"
  }
```

## 截图欣赏

<p align="center">
    <img width="90%" height="90%" src="./public/images/home-js.png"/>
</p>

<p align="center">
   <img width="90%" height="90%" src="http://okkzzhtds.bkt.clouddn.com/index-home.png"/>
</p>

<p align="center">
   <img width="90%" height="90%" src="http://okkzzhtds.bkt.clouddn.com/infert.png"/>
</p>


