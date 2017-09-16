/**
 *  BaseUtils
 *  父类，基本的utils操作
 */
class BaseUtils{
    constructor(){
        this.show = $('#show');
        this.texts = $('#texts');
    }

    //监听用户输入实时预览视图
    UpdateChange(){
        this.InitMarked();
        new MenuClick().show.text("");
        new MenuClick().show.append(marked( new MenuClick().texts.val()));

    }
    //监听页面变化(全屏，放大，缩小，微调)实时更改编辑，预览区域高度
    changeDivHeight(){
        var h = document.documentElement.clientHeight;//获取页面可见高度
        new MenuClick().show.css("min-height", h);
        new MenuClick().show.css("max-height", h);
        new MenuClick().texts.css("min-height", h -36);
        new MenuClick().texts.css("max-height", h -36);
    }
    //全屏，响应子类监听的快捷键操作，底部按钮操作
    launchFullScreen (element) {
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
    InitMarked(){
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
    HelpDomHtml(){

        let htmlDom = '<div class="row" style="padding-top: 30px">\n' +
            '    <div class="text-center col-md-3 col-sm-3 col-xs-3">\n' +
            '        ctrl+p <br> 新建页面\n' +
            '    </div>\n' +
            '    <div class="text-center col-md-3 col-sm-3 col-xs-3">\n' +
            '        ctrl+p <br> 新建页面\n' +
            '    </div>\n' +
            '    <div class="text-center col-md-3 col-sm-3 col-xs-3">\n' +
            '        ctrl+p <br> 新建页面\n' +
            '    </div>\n' +
            '    <div class="text-center col-md-3 col-sm-3 col-xs-3">\n' +
            '        ctrl+p <br> 新建页面\n' +
            '    </div>\n' +
            '</div>\n' +
            '<div class="row" style="padding-top: 18px">\n' +
            '    <div class="text-center col-md-3 col-sm-3 col-xs-3">\n' +
            '        ctrl+p <br> 新建页面\n' +
            '    </div>\n' +
            '    <div class="text-center col-md-3 col-sm-3 col-xs-3">\n' +
            '        ctrl+p <br> 新建页面\n' +
            '    </div>\n' +
            '    <div class="text-center col-md-3 col-sm-3 col-xs-3">\n' +
            '        ctrl+p <br> 新建页面\n' +
            '    </div>\n' +
            '    <div class="text-center col-md-3 col-sm-3 col-xs-3">\n' +
            '        ctrl+p <br> 新建页面\n' +
            '    </div>\n' +
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
    ClearEditor(){
        $.toast({
            heading: '提示',
            text: '内容已经为您清空，请再接再厉不要停止写作。',
            icon: 'success',
            loader: true,        // Change it to false to disable loader
            loaderBg: '#64bb2c',  // To change the background
            position: 'top-right',
            bgColor: '#78d903',
            textColor: 'white'
        });
        new MenuClick().show.text("");
        new MenuClick().texts.val("");
    }
    //后退
    Back(){
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
    //前进
    // forward(){
    //     history.go(1)
    // }
    //关闭窗口
    CloseWindows(){
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
            window.open('','_self','');
            window.close();
        });

    }
}

/**
 * KeyClick
 * 继承父类，响应用户键盘操作
 */
class KeyClick extends BaseUtils{
    constructor(){
        super();
    }
    //监听alt-1 进入全屏
    alt(){

        keymage('alt-1', () => {
            //alert("launchFullScreen!");
            this.launchFullScreen(document.documentElement);
            return false;
        });
    }
    //监听esc 退出全屏
    esc(){

        keymage('esc', () => {
            this.exitFullscreen();
            return false;
        });
    }
    //监听ctrl-s 保存笔记
    save(){
        keymage('ctrl-s', function() {
            if($('#texts').val() == null || $('#texts').val() === ''){
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

            }else {
                swal({
                    title: '温馨提示',
                    text: '文章已经保存成功啦',
                    timer: 2000,
                });
            }
            return false;
        });
    }
    //ctrl-p 新建笔记文件
    NewFile(){
        keymage('ctrl-p', function() {
            alert("新建笔记文件");
            return false;
        });
    }
    //ctrl-q 退出
    Quit(){
        keymage('ctrl-q', () => {
            this.CloseWindows();
            return false;
        });
    }
    //ctrl-h 帮助页面
    Help(){
        keymage('ctrl-h', () => {
            this.HelpDomHtml();
            return false;
        });
    }
    //ctrl-d 清除页面内容
    Clear(){
        keymage('ctrl-d', () => {
            this.ClearEditor();
            return false;
        });
    }
    //监听alt-3 后退
    BackCtrl(){
        keymage('alt-3', () => {
            //alert("launchFullScreen!");
            this.Back();
            return false;
        });
    }
    //监听alt-2 前进
    // Forward(){
    //     keymage('alt-2', () => {
    //         //alert("launchFullScreen!");
    //         this.forward();
    //         return false;
    //     });
    // }
    //导出快捷键操作 外部调用这个方法即可
    control(){
        this.alt();
        this.BackCtrl();
        // this.Forward();
        this.esc();
        this.save();
        this.NewFile();
        this.Quit();
        this.Help();
        this.Clear();
        this.changeDivHeight();
    }
}

/**
 * MenuClick
 * 继承父类，响应用户菜单操作
 */
class MenuClick extends BaseUtils{
    constructor(){
        super();
    }

    HelpClick(){
        this.HelpDomHtml();
    }

    DeletClick(){
        this.ClearEditor()
    }

    CloseClick(){
        this.CloseWindows();
    }

    BackClick(){
        this.Back();
    }
}

//监听窗口大小变化，重新设置页面高度
window.onresize= () => {
   new KeyClick().changeDivHeight();
};

//console.log(global.config);




