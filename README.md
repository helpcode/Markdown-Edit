<p align="center">
    <img src="./public/images/markdown.png"/>
</p>
<p align="center">
  DBeditor The Best MarkDown Editor
</p>
<p align="center">
  <a href="https://nodejs.org/en/download/"><img src="https://img.shields.io/badge/node.js-6.11.1-blue.svg"
                                                           alt="nodejs"></a>
            <a href="http://www.expressjs.com.cn"><img src="https://img.shields.io/badge/express-4.15.2-red.svg"
                                                       alt="express"></a>
            <a href="https://nwjs.io/"><img src="https://img.shields.io/badge/nw-0.25.0-yellow.svg" alt="nw"></a>
            <a href="https://github.com/nwjs-community/nw-builder"><img
                    src="https://img.shields.io/badge/nw--builder-3.4.1-blue.svg" alt="nw--builder"></a>
            <a href="https://github.com/chjj/marked"><img src="https://img.shields.io/badge/marked-0.3.6-%23ff69b4.svg"
                                                          alt="marked"></a>

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

### Linux

---

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



_当然了，如果你不需要 `nw`在开发阶段预览网站在PC端的效果，和`nw-builder` 打包工具来打包，那么就不需要配置我上面说的那些东西。直接从`package.json`中把`nw`和`nw-builder`配置删除即可。你可以用我下面说的`builder.sh` shell 脚本的方式来打包_



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


### Windows / Mac

---

**1：打包方式1：普通文件 (推荐方式)**

在`Windows`系统上,你可以将你的应用所有相关文件与`NW.js`执行文件放在相同文件夹下一起发送给你的用户。确保`nw.exe` 与 `package.json`在相同的文件夹（或目录）下。 或者你可以把你的应用的所有相关文件放在一个单独的文件夹下，并将该文件夹命名为`package.nw`，该文件夹需要放在与`nw.exe`相同的文件夹（或目录）中。

在Mac系统中，新建名称为`app.nw`的文件夹，把你的应用所有相关文件放入其中，然后将`app.nw`文件夹放在`nwjs.app/Contents/Resources/`目录下即可。


**2：打包方式2：ZIP压缩文件**

你可以将应用的所有相关文件打成一个名为`package.nw`的压缩包。在`Windows`系统中，将`package.nw`与`NW.js`可执行文件放到相同目录即可。而在`Mac`系统中，则将`package.nw`放到`nwjs.app/Contents/Resources/`目录下。

---

**这里不要问`Linux`环境下为什么打包教程写的那么详细，因为这是我本机电脑环境，没有`Windows`和`Mac`系统，后期会虚拟机安装然后讲程序打包成安装包方式，尽情期待！**

## 1：关于我

> 学的越多，才发现自己会的其实越少。

一名荡漾在码海中正和小伙伴们划着船并努力创业的WEB工程师，喜欢研究各种最新最好玩的技术，拥有强烈的无比的求知探索欲，热衷技术开源，同时能够保持高昂的热情不断自我学习自我反省自我升级。

<p class="danger">
  坚信：“有能力的人选择生活，余者被生活选择”
</p>


## 2：个人技能

- 2.1: 精通HTML，CSS，能够熟练的使用前端编码工具快速开发符合需求的页面，高质量还原视觉与交互设计成果。精通web标准化和div + css页面重构，能解决主流浏览器兼容性问题。

- 2.2: 同时具有很强的原生js代码编写能力，主导负责过公司大型商业电商平台的设计与研发过程，项目中负责开发基于Vuejs，webpack，sui的移动端电商平台前端，后端架构采用linux，apache，MySQL，php，thinkphp，对现代化前端具有足够的掌握，个人具备丰富的实战项目开发经验。

- 2.3: 对web开发，前端后端服务器数据库上线运维升级维护有整套的技术掌握和了解，团队开发中能够很好协调前后端人员沟通交流，提高团队开发的效率和质量。

- 2.4: 同时个人具备优秀的业务需求沟通能力，较强的分析问题解决问题的能力，对新技术充满好奇能够自主学习并能通过新技术解决现有问题，经常加班熬夜抗压能力强。



## 3：联系方式

如果你对我感兴趣，想要了解并与我交流，可以通过以下方式联系到本人！

- 1：博客：[geekhelp](http://geekhelp.cn/)
- 2：Github：[helpcode](https://github.com/helpcode)
- 3：QQ群：[540144097](http://shang.qq.com/wpa/qunwpa?idkey=1c684eb6c3d6b32ac50b0d179096ed64124b9db577add0319b7b1a96a0235656)
- 4：QQ：2271608011




