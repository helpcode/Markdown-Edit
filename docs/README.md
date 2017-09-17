
![markdown](./img/markdown.png)

# DBeditor

<p class="tip">
   DBeditor The Best MarkDown Editor
</p>


开发 `DBeditor` MarkDown 文本编辑器的主要目的出于技术学习，想了解一下所谓的`Node.js`跨平台开发，也算是为了拓宽自己的技术见解。

## 它是如何工作的？

`DBeditor` 是基于`Node.js` + `Express` + `Nw.js` 开发构建的，通过自己写的 `Linux Shell` 配合 `Nw.js SDK` 进行构建打包。

## 它支持的平台？

`DBeditor` 是一款跨平台的PC端应用，兼容主流的`Linux` / `Mac` / `Windows`，能够在各个平台提供一直的视觉`UI`效果，简约大气的高效的写作效率，让用户更加专注文章内容的编写，省去复杂的菜单操作。

## 它的技术架构

- 1：Node.js 使用的语言
  > 官网：[http://nodejs.cn/](http://nodejs.cn/)
  
- 2：Npm 包管理器
  > 官网：[https://www.npmjs.com/](https://www.npmjs.com/)
  
- 3：express 著名的Node.js Web框架
  > 官网：[http://www.expressjs.com.cn/](http://www.expressjs.com.cn/)
  
- 4：marked MarkDown解析器
  > 官网：[https://github.com/chjj/marked](https://github.com/chjj/marked)
  
- 5：Nw.js 项目跨平台框架
  > 官网：[https://github.com/nwjs/nw.js](https://github.com/nwjs/nw.js)
  
- 6：nw-builder：Nw.js 的打包库
  > 官网：[https://github.com/nwjs/nw-builder](https://github.com/nwjs/nw-builder)
  
- 7：highlight 代码高亮，编辑区域代码使用
  > 官网：[https://github.com/isagalaev/highlight.js](https://github.com/isagalaev/highlight.js)
  
- 8：ribbon 一款高大上的彩带，欢迎页面用到了
  > 官网：[https://github.com/hustcc/ribbon.js](https://github.com/hustcc/ribbon.js)
  
- 9：jquery 不解释..
  > 官网：[https://jquery.com/](https://jquery.com/)
  
- 10：bootstrap 主要用到网格系统
  > 官网：[http://bootcss.com/](http://bootcss.com/)
  
- 11：keymage 键盘按键的事件监听库
  > 官网：[https://github.com/piranha/keymage](https://github.com/piranha/keymage)
  
- 12：jquery-toast-plugin jquery 浮动的提示
  > 官网：[https://github.com/kamranahmedse/jquery-toast-plugin/](https://github.com/kamranahmedse/jquery-toast-plugin/)
  
- 13：limonte-sweetalert2 jquery 大气的弹窗
  > 官网：[https://github.com/limonte/sweetalert2](https://github.com/limonte/sweetalert2)
  
- 14：js-yaml 解析_config.yml站点配置文件
  > 官网：[https://github.com/nodeca/js-yaml](https://github.com/nodeca/js-yaml)
  
- 15：jade Html 模板引擎
  > 官网：[http://jade-lang.com/](http://jade-lang.com/)    

## 安装

### 一键安装

本机开发系统是64位的`Ubuntu 16.04`，这里主要首先介绍在`Linux`系统上的打包构建过程。如果你比较懒可以去这里下载我编译打包好的应用。

> 下载地址：[releases](https://github.com/helpcode/DBeditor/releases)

### 自己打包

如果你不想用我打包好的东西，想自己修改源码自定义的话，这里你很有必要了解一下具体的打包过程！

<p class="danger">
  必备环境：Node.js， Npm，推荐自行百度，或去我博客[http://geekhelp.cn](http://geekhelp.cn)里面搜索相关文章
</p>


#### 下载Nw.js

去[Nw.js](https://nwjs.io/)官网下载构建项目的SDK，官网有两个：`NORMAL` 和 `SDK`版本，开发阶段推荐下载`SDK`版本便于调试(虽然我没用它)，打包构建推荐用`NORMAL`，为什么这么推荐呢，因为`SDK`版243.2MB，而`NORMAL` 版173.7MB，至于选择哪一个你应该清楚了。

需要注意的是，这个下载速度比较慢，需要挂Vpn才行哦，这里提供自用的两个SDK的七牛云下载链接(不要问我为什么不用垃圾的云盘，气人)：

> NORMAL：[nwjs-v0.25.1-linux-x64.tar.gz]()

> SDK：[nwjs-sdk-v0.25.1-linux-x64.tar.gz]()


#### 打包前的准备

`Nw.js`官网提供很多打包工具进行打包，具体参见这个地址：[How to package and distribute your apps](https://github.com/nwjs/nw.js/wiki/How-to-package-and-distribute-your-apps)

之前我用的是 [nw-builder](https://github.com/nwjs/nw-builder) 进行打包的，不过`nw-builder`在初始化的时候会去下载构建版本的 `SDK`然后把这个三四百MB的`SDK`也打包到你的应用中，这种方式自然不推荐。如果你钟情这种方式可以参看官网的配置方式：

这里简单说一下：

```bash
# 项目中安装 nw-builder
npm install nw-builder --save-dev
```

然后在`package.json`中配置一下启动`scripts`，实例如下：

```bash
"scripts": {
    # dev阶段查看运行效果
    "dev": "nw /home/bmy/桌面/Markdown-Edit",
    # 同上，dev阶段查看运行效果
    # 需要npm安装 nw，参见：https://github.com/nwjs/npm-installer
    "nw": "nw",
    # 运行网站，node-dev 需要自己安装不要问我
    "node": "node-dev ./bin/www",
    # 问题关键来了，这里是你需要配置的 nw-builder ， linux64为打包平台会，
    # 根据这个参数自动去下载对应SDKN， --buildDir 为打包成功输出目录，默认build
    # /home/bmy/桌面/Markdown-Edit/ 是项目绝对路径
    "prod": "nwbuild --platforms linux64 --buildDir dist/ /home/bmy/桌面/Markdown-Edit/",
    # 这个是我自己写的 Linux shell 脚本，下面将说到，这也是官网推荐的打包方式
    "online": "./../builder.sh",
    # 这个是 docute 项目文档
    "docs": "docute ./docs --out-dir dist --source-maps --presets env"
  }
```

好了，这是`nw-builder`的配置，现在来说说我用的也是官网推荐的打包方式吧，官方文档是这么说的：

---
  
  **1：打包方式1：普通文件 (推荐方式)**
  
  在Windows和Linux系统上,你可以将你的应用所有相关文件与NW.js执行文件放在相同文件夹下一起发送给你的用户。确保nw (或 nw.exe) 与 package.json在相同的文件夹（或目录）下。 或者你可以把你的应用的所有相关文件放在一个单独的文件夹下，并将该文件夹命名为package.nw，该文件夹需要放在与nw (或 nw.exe)相同的文件夹（或目录）中。
  
  在Mac系统中，新建名称为app.nw的文件夹，把你的应用所有相关文件放入其中，然后将app.nw文件夹放在nwjs.app/Contents/Resources/目录下即可。
  
  推荐您使用该打包方式。
  
  **2：打包方式2：ZIP压缩文件**
  
  你可以将应用的所有相关文件打成一个名为package.nw的压缩包。在Windows与Linux系统中，将package.nw与NW.js可执行文件放到相同目录即可。而在Mac系统中，则将package.nw放到nwjs.app/Contents/Resources/目录下。

---

好了，看完了吧！这里对于官网推荐的打包方式一这里不推荐，项目源码直接暴露在普通用户眼前，如果用户不小心删除了源码某个文件怎么办？更加存在有的用户会点开文件看看然后随意修改源码导致软件崩溃，这样就不能给用户提供更好的服务了，你肯定也不想这样。

那么我们来看看第二种打包方式吧，这里也主要介绍这种方式。

简单说就是按照`Nw.js`规范配置好`package.json`，具体如何配置请看这篇文章：[nw.js 中文文档](https://wizardforcel.gitbooks.io/nwjs-doc/content/)。记得回来哦。

#### 开始打包

其实第二种方法说白了也就是到项目目录`zip`压缩所有的文件，改后改名为`xxx.nw`，将`xxx.nw`剪切到`Nw.js`文件夹中，至于`Nw.js`下载地址用哪个版本上面说了，可以去下载。

<p class="danger">
  记得排除`node_modules`中的包`nw`和`nw-builder`，要不然被误打包到应用中徒增四五百兆体积！！！！
</p>

然后在项目根目录执行命令：

```bash
./nw xxx.nw
```

即可运行你的应用，其实这种方式虽然程序打包了，不过源码还是暴露在外部的。按照官方文档你可以将源码 `xxx.nw` 和 `nw` 合并。

```bash
cat nw app.nw > app && chmod +x app && rm -rf app.nw
```

这里已经打包成功了，如果你嫌弃每次打包都需要手动压缩，重命名移动然后敲命令很麻烦，其实我也嫌麻烦所以我写了一个Linux Shell 脚本来帮助我们实现这些操作：

具体代码：

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

代码很简单，但是很实用，不过你的文件结构应该是这样，才可以顺利运行脚本

```text
    DBeditor
     |
     |--- Markdown-Edit
     |--- nwjs-v0.25.1-linux-x64
     |--- builder.sh
```

你还需要在项目 `Markdown-Edit` 的`package.json`中配置如下(上面也说过了)：
```json
"scripts": {
    "online": "./../builder.sh",
  }
```
然后终端执行`npm run online` 即可打包应用

具体运行效果如下：

![builder](http://okkzzhtds.bkt.clouddn.com/builder.png)

好了，到这一步已经打包完成了。不管你有没有看懂，没有看懂联系我QQ：2271608011，或者加我的技术群：399041912。