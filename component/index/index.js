/**
 *  BaseUtils
 *  父类，基本的utils操作
 */
class BaseUtils {
    constructor() {
        // 文章目录菜单的隐藏展示
        this.menu = true;
        // 表情框的的隐藏展示
        this.emils = true;
        this.show = $('#show');
        this.texts = $('#texts');
        this.menu = $('#menu-left');
        this.props = $('#blank');
    }

    //监听用户输入实时预览视图
    UpdateChange() {
        this.InitMarked();
        new MenuClick().show.text("");
        new MenuClick().show.append(marked(new MenuClick().texts.val()));
    }

    //监听页面变化(全屏，放大，缩小，微调)实时更改编辑，预览区域高度
    changeDivHeight() {

        var h = document.documentElement.clientHeight;//获取页面可见高度

        // 判断本地用户是否已经新建文章了，如果没有，显示遮罩
        if (localStorage.getItem("article") == null) {
            $('#blank').show()

        }
        if (localStorage.getItem("OpenMenuArticle") != null){
            $('#editstate').text('当前：' + localStorage.getItem("OpenMenuArticle"));
        }else if(localStorage.getItem("article") != null){
            $('#editstate').text('当前：' + this.GetLocalArticleTitle());
        }else {
            $('#editstate').text('当前： 无');
        }

        //左侧抽屉菜单
        new MenuClick().menu.css("min-height", h);
        new MenuClick().menu.css("max-height", h);

        // 图层遮挡
        new MenuClick().props.css("min-height", h);
        new MenuClick().props.css("max-height", h);

        new MenuClick().show.css("min-height", h);
        new MenuClick().show.css("max-height", h);
        new MenuClick().texts.css("min-height", h - 36);
        new MenuClick().texts.css("max-height", h - 36);

    }

    //全屏，响应子类监听的快捷键操作，底部按钮操作
    launchFullScreen(element) {
        $("#full").hide(500);
        $("#exit").show(500);
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }

    //退出全屏，响应子类监听的快捷键操作，底部按钮操作
    exitFullscreen() {
        $("#full").show(500);
        $("#exit").hide(500);
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }

    //初始化 marked 并配置 highlight 代码高亮
    InitMarked() {
        var rendererMD = new marked.Renderer();
        marked.setOptions({
            renderer: rendererMD,
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false
        });

        marked.setOptions({
            highlight: function (code) {
                return hljs.highlightAuto(code).value;
            }
        });
    }

    //帮助功能的弹出框和html代码
    HelpDomHtml() {

        let htmlDom = '<div class="row" style="padding-top: 30px">\n' +
            '    <div class="text-center col-md-3 col-sm-3 col-xs-3">\n' +
            '        Ctrl+P <br> 新建笔记\n' +
            '    </div>\n' +
            '    <div class="text-center col-md-3 col-sm-3 col-xs-3">\n' +
            '        Alt+1 <br> 进入全屏\n' +
            '    </div>\n' +
            '    <div class="text-center col-md-3 col-sm-3 col-xs-3">\n' +
            '        ESC <br> 退出全屏\n' +
            '    </div>\n' +
            '    <div class="text-center col-md-3 col-sm-3 col-xs-3">\n' +
            '        Ctrl+S <br> 保存笔记\n' +
            '    </div>\n' +
            '</div>\n' +
            '<div class="row" style="padding-top: 18px">\n' +
            '    <div class="text-center col-md-3 col-sm-3 col-xs-3">\n' +
            '        Ctrl+Q <br> 关闭软件\n' +
            '    </div>\n' +
            '    <div class="text-center col-md-3 col-sm-3 col-xs-3">\n' +
            '        Alt+F <br> 帮助页面\n' +
            '    </div>\n' +
            '    <div class="text-center col-md-3 col-sm-3 col-xs-3">\n' +
            '        Alt+D <br> 清除内容\n' +
            '    </div>\n' +
            '    <div class="text-center col-md-3 col-sm-3 col-xs-3">\n' +
            '        Alt-3 <br> 后退一步\n' +
            '    </div>\n' +
            '</div>'+
            '<div class="row" style="padding-top: 18px">\n' +
            '    <div class="text-center col-md-3 col-sm-3 col-xs-3">\n' +
            '        Alt-E <br> 抽屉菜单\n' +
            '    </div>\n' +
            '    <div class="text-center col-md-3 col-sm-3 col-xs-3">\n' +
            '        Alt-Z <br> 表情菜单\n' +
            '    </div>\n'+
            '</div>';

        swal({
            title: '常用快捷键',
            showCancelButton: true,
            confirmButtonText: '更多',
            cancelButtonText: '取消',
            html: htmlDom
        }).then(() => {
            //确定前去
            location.href = '/help';
        });

    }

    //清空编辑区域和预览区域内容
    ClearEditor() {
        new MenuClick().show.text("");
        new MenuClick().texts.val("");
    }

    //后退
    Back() {
        swal({
            title: '温馨提示',
            text: "文章写完了吗，确定返回？",
            type: 'warning',   //感叹号图标
            showCancelButton: true,   //显示取消按钮
            confirmButtonColor: '#3085d6', //俩个按钮的颜色
            cancelButtonColor: '#d33',
            confirmButtonText: '确定', //俩个按钮的文本
            cancelButtonText: '取消',
            confirmButtonClass: 'btn btn-success',  //俩个按钮的类样式
            cancelButtonClass: 'btn btn-danger',

        }).then(function () {
            history.go(-1)
        });

    }

    //关闭窗口
    CloseWindows() {
        swal({
            title: '温馨提示',
            text: "文章写完了吗？保存了吗？确定退出？",
            type: 'warning',   //感叹号图标
            showCancelButton: true,   //显示取消按钮
            confirmButtonColor: '#3085d6', //俩个按钮的颜色
            cancelButtonColor: '#d33',
            confirmButtonText: '确定', //俩个按钮的文本
            cancelButtonText: '取消',
            confirmButtonClass: 'btn btn-success',  //俩个按钮的类样式
            cancelButtonClass: 'btn btn-danger',

        }).then(function () {
            window.open('', '_self', '');
            window.close();
        });

    }

    // 加密用户文章数据
    EncryptedBinary(str) {
        var total2str = "";
        for (var i = 0; i < str.length; i++) {
            var num10 = str.charCodeAt(i);
            var str2 = num10.toString(2);
            if (total2str == "") {
                total2str = str2;
            } else {
                total2str = total2str + " " + str2;
            }
        }

        return total2str;
    }

    //开启关闭右侧文件列表
    OffMenu() {
        this.MouseLeaveClose('#menu-left');
        if (this.menu) {
            $('#menu-left').show(100);
            this.GetMenuList();
            this.menu = false;
        } else {
            $('#menu-left').hide(100);
            this.menu = true;
        }
    }

    // 本地存储数据
    SetLocalStorage(key, value) {
        localStorage.setItem("article", JSON.stringify(value));
    }

    // 读取本地数据
    GetLocalStorage(key) {
        var data = JSON.parse(localStorage.getItem(key));
        return data;
    }

    //获取本地数据中最新的文章标题
    GetLocalArticleTitle() {
        var result = this.GetLocalStorage('article');
        var max = result[0].articleTitle;
        return max;
    }

    // 抽屉菜单 笔记列表 单击事件 获取文件内容
    ReadArticle(FileName) {
        // 存储当前正在编辑的文件名称
        localStorage.setItem('OpenMenuArticle', FileName);

        // 从服务器来获取文件内容
        $.ajax({
            type: 'POST',
            dataType: "json",
            url: "/api/v1.1/getFileData/",
            data: {
                name: this.EncryptedBinary(FileName)
            },
            success: (data) => {

                if (data.result == "ReadFIleSuccess") {
                    // 清空编辑区 和 预览区域
                    this.ClearEditor();
                    // 填充编辑区
                    new MenuClick().texts.val(data.filedata);
                    // 填充预览区域
                    new MenuClick().show.append(marked(new MenuClick().texts.val()));

                    $('#editstate').text('当前：' + FileName)

                } else {
                    $.toast({
                        heading: '提示',
                        text: '文件读取失败',
                        icon: 'warning',
                        loader: true,        // Change it to false to disable loader
                        loaderBg: '#9EC600',  // To change the background
                        position: 'top-right',
                        bgColor: '#FF1356',
                        textColor: 'white'
                    });
                }
            },
            error: function (xhr) {
                console.log(xhr)
            }
        })
    }

    // 抽屉菜单 笔记列表 单击事件 删除文件
    DeletdArticle(name){
        $.ajax({
            type: 'POST',
            dataType: "json",
            url: "/api/v1.1/deleteFile/",
            data: {
                name: this.EncryptedBinary(name)
            },
            success: (data) => {
                if (data.result == "DeleteFileSuccess") {
                    this.GetMenuList();
                    // 清空编辑区 和 预览区域
                    this.ClearEditor();
                }else {
                    $.toast({
                        heading: '提示',
                        text: '文件删除失败',
                        icon: 'warning',
                        loader: true,        // Change it to false to disable loader
                        loaderBg: '#9EC600',  // To change the background
                        position: 'top-right',
                        bgColor: '#FF1356',
                        textColor: 'white'
                    });
                }
            },
            error: function (xhr) {
                console.log(xhr)
            }
        })


    }

    // 获取左侧 笔记列表
    GetMenuList() {
        $.ajax({
            type: 'POST',
            dataType: "json",
            url: "/api/v1.1/getFileList/",
            data: {},
            success: (data) => {
                console.log(data);
                var meth = data.filedata;

                if (data.result != "ReadDirError") {

                    $("#dir-left").children("li").remove();
                    for (var i = 0; i < meth.length; i++) {
                        $("#dir-left").append('' +
                            '<li class="mdui-ripple">' +
                            '<img onclick="'+'methods.DeletdArticle('+ "'" + meth[i].articleTitle  + "'" +')" class="filedelete" src="/images/delete.png" >'+
                            '<a class="mdui-text-truncate" onclick="' + 'methods.ReadArticle(' + "'" + meth[i].articleTitle + "'" + ')">' + meth[i].articleTitle +
                            '</a></li>'
                        );
                    }

                    this.SetLocalStorage("article", meth)

                } else {
                    // 如果没有请求到目录数据，那么情况本地缓存
                    localStorage.clear();
                    $("#dir-left").html("<span class='nodata' style='text-align: center; width: 100%; display: inline-block; margin: 93% 0 0 0;color: #d4d4d4;'>没有文章, 试试 Ctrl+P.</span>");
                }
            },
            error: function (xhr) {
                console.log(xhr)
            }
        })
    }

    // ctrl+p新建文件
    CreateNewFile(){
        //清除单击抽屉菜单后的文件名称
        localStorage.removeItem("OpenMenuArticle");
        // 悬浮按钮 1500， 输入框 2500 遮罩 2000
        swal({
            title: '输入文件名',  //标题
            input: 'text',
            type: 'question',
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            showCancelButton: true,
            showLoaderOnConfirm: true,
            preConfirm: (name) => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (name === '') {
                            reject('文件名不能为空')
                        } else {
                            resolve()
                        }
                    }, 1000)
                })
            },
            allowOutsideClick: false
        }).then((name) => {

            $('#editstate').text('当前：' + name);

            $.ajax({
                type: 'POST',
                dataType: "json",
                url: "/api/v1.1/file",
                data: {
                    name: this.EncryptedBinary(name),
                    value: 'null'
                },
                success: (data) => {
                    console.log(data);
                    if (data.result != "MdCreateSuccess" &&
                        data.result != "FileCreateSuccess") {
                        swal({
                            title: '抱歉',
                            text: '文件已经存在',
                            timer: 2000
                        })
                    } else {

                        //新建文件后直接关闭遮罩
                        $('#blank').hide();

                        // 笔记新建成功后，更新抽屉菜单视图
                        this.GetMenuList();

                        //新建文件成功后，清楚输入框内容
                        this.ClearEditor();
                    }
                },
                error: function (xhr) {
                    console.log(xhr)
                }
            });


        });
    }

    //保存被修改的文件
    SaveFileEditor(){
        var WhoName;
        if ($('#texts').val() == null || $('#texts').val() === '') {
            $.toast({
                heading: '文章内容为空',
                text: '没有内容，无法为您保存！请写入文章',
                icon: 'warning',
                loader: true,        // Change it to false to disable loader
                loaderBg: '#9EC600',  // To change the background
                position: 'top-right',
                bgColor: '#FF1356',
                textColor: 'white'
            });

        } else {

            // 如果不是从抽屉菜单打开
            if (localStorage.getItem("OpenMenuArticle") == null) {
                WhoName = this.EncryptedBinary(this.GetLocalArticleTitle())
            } else {
                WhoName = this.EncryptedBinary(localStorage.getItem("OpenMenuArticle"));
            }


            $.ajax({
                type: 'POST',
                dataType: "json",
                url: "/api/v1.1/file",
                data: {
                    name: WhoName,
                    value: this.EncryptedBinary(new MenuClick().texts.val())
                },
                success: (data) => {
                    if (data.result == "SaveSuccess") {
                        $.toast({
                            heading: '恭喜',
                            text: '文件保存成功',
                            icon: 'success',
                            loader: true,        // Change it to false to disable loader
                            loaderBg: '#64bb2c',  // To change the background
                            position: 'top-right',
                            bgColor: '#78d903',
                            textColor: 'white'
                        });
                    } else {
                        swal({
                            title: '抱歉',
                            text: '文件保存失败',
                            timer: 1000
                        })
                    }
                },
                error: function (xhr) {
                    console.log(xhr)
                }
            });
        }
    }

    //打开表情选择框，写入内容
    OpenEmoji(icons){
        // 底部打开菜单
        if(icons == undefined){
            if(this.emils){
                $('#emojiku').show(100);
                this.emils = false;
            }else {
                $('#emojiku').hide(100);
                this.emils = true;
            }
        }else {
            var html = "<i class='twa twa-" + icons + "'></i>";
            $('#texts').insertContent(html);
            this.UpdateChange();
        }

        this.MouseLeaveClose('#emojiku');
    }

    // 鼠标离开后关闭对应菜单
    MouseLeaveClose(dom){
        $(dom).mouseleave(() => {
            if(dom == '#emojiku'){
                this.emils = true;
                $(dom).hide(100);
            }else {
                this.menu = true;
                $(dom).hide(100);
            }
        });
    }


}

/**
 * KeyClick
 * 继承父类，响应用户键盘操作
 */
class KeyClick extends BaseUtils {
    constructor() {
        super();
    }

    //监听alt-1 进入全屏
    alt() {
        keymage('alt-1', () => {
            //alert("launchFullScreen!");
            this.launchFullScreen(document.documentElement);
            return false;
        });
    }

    //监听esc 退出全屏
    esc() {

        keymage('esc', () => {
            this.exitFullscreen();
            return false;
        });
    }

    //监听ctrl-s 保存笔记
    save() {
        keymage('ctrl-s', () => {
            this.SaveFileEditor();
            return false;
        })
    }

    //ctrl-p 新建笔记文件
    NewFile() {
        keymage('ctrl-p', () => {
            this.CreateNewFile();
            return false;
        });
    }

    //ctrl-q 退出
    Quit() {
        keymage('ctrl-q', () => {
            this.CloseWindows();
            return false;
        });
    }

    //Alt-h 帮助页面
    Help() {
        keymage('alt-f', () => {
            this.HelpDomHtml();
            return false;
        });
    }

    //alt-d 清除页面内容
    Clear() {
        keymage('alt-d', () => {
            this.ClearEditor();
            return false;
        });
    }

    //监听alt-3 后退
    BackCtrl() {
        keymage('alt-3', () => {
            //alert("launchFullScreen!");
            this.Back();
            return false;
        });
    }

    //监听alt-o，打开侧边栏
    OpenMenu() {
        keymage('alt-e', () => {
            this.OffMenu();
            return false;
        });
    }

    // alt-z 打开表情菜单
    EmojiMenu(){
        keymage('alt-z', () => {
            this.OpenEmoji();
            return false;
        });
    }

    //导出快捷键操作 外部调用这个方法即可
    control() {
        this.alt();
        this.BackCtrl();
        // this.Forward();
        this.esc();
        this.save();
        this.NewFile();
        this.Quit();
        this.Help();
        this.Clear();
        this.OpenMenu();
        this.EmojiMenu();
        this.changeDivHeight();
    }

}

/**
 * MenuClick
 * 继承父类，响应用户菜单操作
 */
class MenuClick extends BaseUtils {
    constructor() {
        super();

    }

    //帮助
    HelpClick() {
        this.HelpDomHtml();
    }

    //新建文件
    NewFileClick(){
        this.CreateNewFile();
    }

    //保存文件
    SaveFileClick(){
        this.SaveFileEditor();
    }

    //清空编辑区内容
    DeletClick() {
        this.ClearEditor()
    }

    //关闭软件
    CloseClick() {
        this.CloseWindows();
    }

    //返回上一级
    BackClick() {
        this.Back();
    }

    //文件菜单
    FileClick() {
        this.OffMenu();
    }

    //表情按钮的点击
    EmojiClick(icons) {
        this.OpenEmoji(icons);
        //alert(icons)
    }
}

//监听窗口大小变化，重新设置页面高度
window.onresize = () => {
    new KeyClick().changeDivHeight();
};