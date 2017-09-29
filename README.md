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

`DBeditor` 是一款跨平台的`MarkDown`编辑器，支持主流的`Linux` / `Mac` / `Windows` 等操作系统，在各个系统上具有统一优秀的表现力。界面设计采用简洁扁平大量留白的UI风格，去除繁琐复杂多余的菜单并参考`Linux`上著名`Vim`的键盘快捷键命令式操作风格，让用更加专注于文章博客的编写，同时支持丰富的表情插入，让文章更具有丰富多彩的表现力。

基于face++开发的人脸识别，让程序更具趣味性，上传你的照片识别你的年龄，男女等特性，难道你不想试试看吗！



> DBeditor名称的来源：我养了一条日天日地的黑色小泰迪，它名字叫大(D)宝(B)。哈哈...就是如此随意

**项目地址：**

- 1：源码地址：https://github.com/helpcode/DBeditor
- 2：下载地址：https://github.com/helpcode/DBeditor/releases
- 3：官网地址：http://localhost:3000/introduce(软件本地运行后，即可访问)
- 4：网站地址：http://localhost:3000/welcome(软件本地运行后，即可访问)
 
 
## 截图欣赏

先来看看下面这些截图吧，好让你为下面有点麻烦的配置过程增加点信心，如果你不懂`Linux`，不懂前端`Nodejs`不懂开发都没关系，你这里可以下载我打包好的软件直接运行即可！

<p align="center">
    <img width="90%" height="90%" src="http://okkzzhtds.bkt.clouddn.com/home-js.png"/>
</p>

<p align="center">
   <img width="90%" height="90%" src="http://okkzzhtds.bkt.clouddn.com/indexs-home-case.png"/>
</p>

<p align="center">
   <img width="90%" height="90%" src="http://okkzzhtds.bkt.clouddn.com/face.png"/>
</p>

<p align="center">
   <img width="90%" height="90%" src="http://okkzzhtds.bkt.clouddn.com/infert.png"/>
</p> 
 
 
## 安装构建

1：下载源码

```bash
sudo mkdir DBeditor && sudo chmod 777 -R DBeditor && cd DBeditor
sudo git clone https://github.com/helpcode/Markdown-Edit.git
sudo npm install
``` 

这里需要注意`npm install`在安装`nw`和`nw-builder`依赖包的时候特别慢，而且需要翻墙才能下载哦。


### Linux 下打包

---



所以先不要安装依赖，在`package.json`中把`nw`和`nw-builder`配置删除，然后`npm install`先安装其他依赖，之后下载我这里提供的这两个包的压缩版本，下载完成解压直接丢到`node_modules`中，然后分别进入`nw`和`nw-builder`的文件夹中解决他们自身的依赖关系，这样会快一点。

而使用`nw-builder`打包应用的时候它会根据你命令`nwbuild --platforms linux64 --buildDir dist/ /home/bmy/桌面/DBeditor/Markdown-Edit/` 去下载对应的`nw.js`的sdk，我提供的依赖包里面已经包含了一枚`0.25.1-sdk-linux64`的sdk，所以能节省不少的速度。
 

> 下载地址：[Nw.js 依赖包](http://okkzzhtds.bkt.clouddn.com/nw.7z) [nw-builder 依赖包](http://okkzzhtds.bkt.clouddn.com/nw-builder.7z)



_当然了，如果你不需要 `nw`在开发阶段预览网站在PC端的效果，或者说不需要`nw-builder` 打包工具来打包，那么就不需要配置我上面说的那些东西。直接从`package.json`中把`nw`和`nw-builder`配置删除即可。你可以用我下面说的`builder.sh` shell 脚本的方式来打包，也是官方推荐的，我不过写了一个shell脚本来自动完成而已_


---


安装解决依赖后打开`package.json`，`scripts`字段中提供有如下命令：

```bash
"scripts": {
    # 上面说了，不需要的话就不配置
    # dev阶段通过nw查看运行效果，
    # 需要npm安装 nw，参见：https://github.com/nwjs/npm-installer
    "dev": "nw /home/bmy/桌面/DBeditor/Markdown-Edit",
    # 同上
    "nw": "nw",
    
    # 本地web方式运行网站，node-dev 需要自己安装不要问我
    # 访问地址http://localhost:3000/welcome
    "node": "node-dev ./bin/www",
    
    # 上面说了，不需要的话就不配置
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

> [https://helpcode.github.io/Markdown-Edit/](https://helpcode.github.io/Markdown-Edit/)

如果你想使用我的脚本来自动打包，那需要注意的是我们之前用`sudo mkdir DBeditor`创建了文件夹，这个文件夹里面除了放置项目源码` Markdown-Edit`，和` Markdown-Edit`同级的是`Nw.js`的 `SDK`，这里推荐下载这个SDK，原因在帮助文档里面写的很清楚，请仔细查看：

> [nwjs-v0.25.1-linux-x64.tar.gz](http://okkzzhtds.bkt.clouddn.com/nwjs-v0.25.1-linux-x64.tar.gz)

下载解压后，放到`DBeditor`文件夹下，然后也是在`DBeditor`文件夹下创建`builder.sh`，具体目录层级和shell代码如下：

**目录层级**
```text
DBeditor
 |--- Markdown-Edit
 |--- nwjs-v0.25.1-linux-x64
 |--- builder.sh
```

文件夹名字可以更改，不过请一并修改`builder.sh`中的五个变量配置。

**builder.sh代码如下：**

```bash
#!/bin/bash

# 如果改了文件名请修改对应的变量值
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

**Windows下打包：**

照例先来看一张效果图(旧版本v1.3的截图)，增强点信心吧！！

![win_index](http://okkzzhtds.bkt.clouddn.com/win_index.PNG)

![windows_write](http://okkzzhtds.bkt.clouddn.com/windows_write.PNG)

- 1：下载对应你操作系统的`Nw.js`sdk，我虚拟机`Windows10`这里提供官方的下载链接：

  > Windows: [32bit](https://dl.nwjs.io/v0.25.1/nwjs-v0.25.1-win-ia32.zip) / [64bit](https://dl.nwjs.io/v0.25.1/nwjs-v0.25.1-win-x64.zip)

- 2:下载下来后，解压`nwjs-v0.25.1-win-x64.zip`。

- 3：打开你项目，在配置好`package.json`后，然后全选所有文件压缩成`xxx.zip`格式，然后改名为`xxx.nw`。

- 4：剪切`xxx.nw` 到 步骤二 的文件夹中，然后执行命令，回车即可看到应用已经运行：
  > nw.exe xxx.nw 

- 5：如果不想用户直接看到项目源码`xxx.nw`，那么使用命令来合并`nw.exe`和`xxx.nw`，这样就会生成一个你想要的`xxx.exe`然后删除源码`xxx.nw`即可。命令如下：
  > copy /b nw.exe+xxx.nw app.exe

- 6：这一步我们已经得到了最终的`app.exe`但是`Nw.js`sdk中还有很多其他文件，这时候我们可以用工具，下载后运行打开
  选择我们需要打包的`app.exe`，然后把sdk文件夹中的所有文件拖到 `Enigma Virtual Box`文件框中，然后点击 [打包]，稍等片刻就好。得到一个`exe`程序，双击运行或者分发给别人使用。
  > [Enigma Virtual Box](http://www.cr173.com/soft/20501.html)
 
  

步骤是不是很多，虽然很简单但是每次这样打包也是很烦人的，在Linux系统中打包我提供了shell脚本自动化完成这些步骤操作。而windows系统中的脚本我正在写...用法也会和Linux shell一样。程序员要学会偷懒...


**Mac 下打包：**

- 1：不多说，同样的下载`Nw.js` Mac版本的sdk：
  > Mac 10.9+: [64bit](https://dl.nwjs.io/v0.25.1/nwjs-v0.25.1-osx-x64.zip)

- 2：同Windows步骤...

- 3：同Windows步骤...

- 4：在`Mac`系统中，则将`package.nw`放到`nwjs.app/Contents/Resources/`目录下即可。



---

**这里不要问`Linux`环境下为什么打包教程写的那么详细，因为这是我本机电脑环境。**



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




