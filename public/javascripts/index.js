

window.addEventListener("keydown", (e) => {
    if (KeyDown(83,e)) {
        e.preventDefault();
        //Ctrl+S
        if($('#texts').val() == null || $('#texts').val() == ''){
            $.toast({
                heading: '文章内容为空',
                text: '没有内容，无法为您保存！请写入文章',
                icon: 'info',
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

    } else if(KeyDown(80,e)){
        //ctrl+p 新建笔记文件
        e.preventDefault();
        console.log("新建笔记文件");

    } else if(KeyDown(81,e)){
        //ctrl+q 退出
        e.preventDefault();
        console.log("退出");

    } else if(KeyDown(72,e)){

        //ctrl+h 帮助页面
        e.preventDefault();
        swal({
            title: '温馨提示',
            text: "亲，文章没有写完把，你确定前往  [帮助页面]  吗？",
            type: 'warning',   //感叹号图标
            showCancelButton: true,   //显示取消按钮
            confirmButtonColor: '#3085d6', //俩个按钮的颜色
            cancelButtonColor: '#d33',
            confirmButtonText: '确定', //俩个按钮的文本
            cancelButtonText: '取消',
            confirmButtonClass: 'btn btn-success',  //俩个按钮的类样式
            cancelButtonClass: 'btn btn-danger',

        }).then(() => {   //确定前去
            location.href = '/help';
        });

    }else if(KeyDown(68,e)) {

        //ctrl+D 退出
        e.preventDefault();
        console.log("清除页面内容");
    }

}, false);

// 更新视图预览
function UpdateChange(){
    $('#show').text("");
    $('#show').append(marked($('#texts').val()));
}

// 判断是什么按键
function KeyDown(Code,e) {
    if(e.keyCode == Code && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        return true;
    }else {
        return false;
    }
}