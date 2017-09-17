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
- 4：官网地址：http://xxxx.xxx.xx.xx/introduce(开发完成，还未部署服务器)
- 5：网站地址：http://xxxx.xxx.xx.xx/welcome(开发完成，还未部署服务器)
 
 
## 截图欣赏

先来看看下面这些截图吧，好让你为下面有点麻烦的配置过程增加点信心，界面还是很简洁的，特别喜欢这种简约扁平大量留白的UI设计！不要问为啥，就是喜欢。

<p align="center">
    <img width="90%" height="90%" src="./public/images/home-js.png"/>
</p>

<p align="center">
   <img width="90%" height="90%" src="http://okkzzhtds.bkt.clouddn.com/index-home.png"/>
</p>

<p align="center">
   <img width="90%" height="90%" src="http://okkzzhtds.bkt.clouddn.com/infert.png"/>
</p>
 
 
 
## 安装构建

骚年，文档记得一定要看，否则不会配置打包那我也没办法了，一定要看哦，相关技术点也要掌握！！

> 文档地址：[https://helpcode.github.io/DBeditor/](https://helpcode.github.io/DBeditor/)

1：下载源码

```bash
sudo mkdir Markdown-Edit && sudo chmod 777 -R Markdown-Edit && cd Markdown-Edit
sudo git clone https://github.com/helpcode/DBeditor.git
sudo npm install
``` 

这里需要注意`npm install`在安装`nw`和`nw-builder`依赖包的时候特别慢，而且需要翻墙才能下载哦。

所以先不要安装依赖，在`package.json`中把`nw`和`nw-builder`配置删除，然后`npm install`先安装其他依赖，之后下载我这里提供的这两个包的压缩版本，下载完成解压直接丢到`node_modules`中，然后分别进入`nw`和`nw-builder`的文件夹中解决他们自身的依赖关系，这样会快一点。

而使用`nw-builder`打包应用的时候它会根据你命令`nwbuild --platforms linux64 --buildDir dist/ /home/bmy/桌面/DBeditor/Markdown-Edit/` 去下载对应的`nw.js`的sdk，我提供的依赖包里面已经包含了一枚`0.25.1-sdk-linux64`的sdk，所以能节省不少的速度。


> 下载地址：[Nw.js 依赖包]() [nw-builder 依赖包]()

---

<p style="color:#ff0000;font-size: 18px;font-weight: bold;">当然了，如果你不需要 `nw`在开发阶段预览网站在PC端的效果，和`nw-builder` 打包工具来打包，那么就不需要配置我上面说的那些东西。直接从`package.json`中把`nw`和`nw-builder`配置删除即可。你可以用我下面说的`builder.sh` shell 脚本的方式来打包</p>

---

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

更多的如何打包配置我都写在了帮助文档里面，请仔细阅读

> [https://helpcode.github.io/DBeditor/](https://helpcode.github.io/DBeditor/)

需要注意的是我们之前用`sudo mkdir Markdown-Edit`创建了文件夹`Markdown-Edit`，这个文件夹里面出除了放置项目源码`DBeditor`，和`DBeditor`同级的是`Nw.js`的 `SDK`，这里推荐下载这个SDK，原因在帮助文档里面写的很清楚，请仔细查看：

> [nwjs-v0.25.1-linux-x64.tar.gz](https://dl.nwjs.io/v0.25.1/nwjs-v0.25.1-linux-x64.tar.gz)

下载解压后，放到`Markdown-Edit`文件夹下，然后也是在`Markdown-Edit`文件夹下创建`builder.sh`，具体目录层级和shell代码如下：

**目录层级**
```text
Markdown-Edit
 |--- DBeditor
 |--- nwjs-v0.25.1-linux-x64
 |--- builder.sh
```

**builder.sh代码如下：**

```bash
#!/bin/bash
codeDir="./Markdown-Edit/"
codeModulesNw="./node_modules/nw/"
codeModulesNwBuilder="./node_modules/nw-builder/"
AppNw="./Markdown-Edit/app.nw"
nwSDK="./nwjs-v0.25.1-linux-x64/"
# 移动dev阶段的 nw 和 nwbuilder
# 脱离 node_modules 到根目录，避免被误打包增加400MB体积
mv $codeModulesNw $codeModulesNwBuilder ./../
# zip压缩并更名改后缀为 app.nw
# 打包完成退回根目录
zip -r ./app.nw ./ &&  echo 'Create success...' && cd .. && echo 'Back to the root directory...'
# 移动打包后的 app.nw 源码 到 NW.js SDK中并添加执行文件权限
mv $AppNw $nwSDK && echo 'Move success...' && chmod +x $nwSDK/app.nw && echo 'Add permission to succeed...'
# 打包构建结束，将dev阶段的 nw，nw-builder 再放回 node_modules 依赖中
mv ./nw/ ./nw-builder/ ./Markdown-Edit/node_modules/
echo 'The program has been packaged，You：Run(y)，Structure(g)，Stop(n)？'
read NAME
if [ "${NAME}" == "y" ]; then
  # 启动应用，这一步没将 nw 和 app.nw 合并
  echo 'Starting up...'
  cd $nwSDK && ./nw app.nw
elif [ "${NAME}" == "g" ]; then
  echo 'Being built...'
  # 合并 nw 和 app.nw ，并删除app.nw源码
  cd $nwSDK && cat nw app.nw > app && chmod +x app && rm -rf app.nw
  echo 'Build and remove source package app.nw success，
  To the SDK directory, execute the command sudo./app to run the program....'
  echo "Or now：Yes(y) / No(n) Run ？"
  read chios
  if [ "${chios}" == "y" ]; then
     # 启动程序
     echo "Starting up..." && ./app
  fi
elif [ "${NAME}" == "n" ]; then
  echo "Ok，Bye..."
fi
```

然后执行
```bash
npm run online
```
脚本会为你自动打包程序的，请记住查看帮助文档！！！


