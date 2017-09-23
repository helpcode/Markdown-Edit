const fs = require("fs");
const path = require('path');
class FileBse{
    constructor(){
        this.filepath = path.join(__dirname, './../../make')
    }

    MkDir(){
        //文件存在，那么创建默认 new.md
        if(this.ExistsFile(this.filepath)){
            if(this.ExistsFile(this.filepath + '/new.md')){
                console.log('文件和md都存在！')
            }else {
                this.CreateFile(this.filepath + '/new.md');
            }
        }else {
            //文件不存在，那么创建make文件和new.md
            fs.mkdir(this.filepath, '0777', (err) => {
                if (err){
                    throw err;
                }else {
                    console.log('创建目录成功');
                    this.CreateFile(this.filepath + '/new.md');
                }
            });
        }
    }


    SaveFile(data){
            fs.writeFile(this.filepath + '/new.md', data.DATA,  (err) => {
                if (err){
                    return console.error(err);
                }
                console.log("数据写入成功！");
            });

        return true;
    }

    // 检测文件是否存在
    ExistsFile(filename){
        try{
            fs.accessSync(filename,fs.F_OK);
        }catch(e){
            return false;
        }
        return true;
    }

    CreateFile(path){
        fs.writeFile(path, '',  (err) => {
            if (err) {
                return console.error(err);
            }
            console.log("CreateFile 文件创建成功");
        });
    }

    // 解密前端传递过来的加密字符串
    DecryptBinary(total2str){
        var goal = "";
        var arr = total2str.split(' ');
        for(var i=0; i < arr.length; i++){
            var str2 = arr[i];
            var num10 = parseInt(str2, 2); ///< 2进制字符串转换成 10进制的数字
            goal += String.fromCharCode(num10); ///< 将10进制的unicode编码, 转换成对应的unicode字符
        }
        return goal;
    }
}

module.exports = FileBse;

