const fs = require("fs");
const path = require('path');

class FileBse {
    constructor() {
        this.filepath = path.join(__dirname, './../../make/');
        console.log("你的文件路径是：" + this.filepath)
    }

    MkDir(res,MdName) {
        console.log("你的文件路径是：" + this.filepath);
        //文件存在，那么创建默认 new.md
        if (this.ExistsFile(this.filepath)) {
            if (this.ExistsFile(this.filepath + MdName + '.md')) {
                console.log('文件夹和笔记md文件都存在！')
                return res.json({
                    status: 200,
                    result: 'FileAlreadyExists'
                });
            } else {
                this.CreateFile(this.filepath + MdName + '.md');
                return res.json({
                    status: 200,
                    result: 'MdCreateSuccess'
                });
            }
        } else {
            //文件不存在，那么创建make文件和new.md
            fs.mkdir(this.filepath, '0777', (err) => {
                if (err) {
                    throw err;
                } else {
                    console.log('创建目录成功');
                    this.CreateFile(this.filepath + MdName + '.md');
                    return res.json({
                        status: 200,
                        result: 'FileCreateSuccess'
                    });
                }
            });
        }
    }

    // 保存文件
    SaveFile(res,data) {
        fs.writeFile(this.filepath + data.filename +'.md', data.filedata, (err) => {
            if (err) {
                return console.error(err);
            }
            return res.json({
                status: 200,
                result: 'SaveSuccess'
            });
        });

        return true;
    }

    // 检测文件是否存在
    ExistsFile(filename) {
        try {
            fs.accessSync(filename, fs.F_OK);
        } catch (e) {
            return false;
        }
        return true;
    }

    //创建md文件
    CreateFile(path) {
        fs.writeFile(path, '', (err) => {
            if (err) {
                return console.error(err);
            }
            console.log("CreateFile 文件创建成功");
        });
    }

    // 读取文件内容
    ReadFIle(res,FileName){
        fs.readFile(this.filepath + FileName + '.md','utf-8',function(err,data){
            if(err){
                res.json({
                    status: 200,
                    result: 'ReadFIleError',
                    filedata: data
                });
            }else{
                res.json({
                   status: 200,
                   result: 'ReadFIleSuccess',
                   filedata: data
                });
            }
        })
    }

    // 读取目录下的笔记文件
    ReaDirList(res){
        let filelist = [];
        fs.readdir(this.filepath, (err, files) =>{
            if (err) {
                res.json({
                    status: 404,
                    result: 'ReadDirError'
                });
            }else {
                files.forEach((file) => {
                    var time = fs.statSync(this.filepath + file).birthtime;
                    filelist.push({
                        articleTitle: file.replace(/.md/g, ''),
                        creatorTime: Date.parse(new Date(time)) /1000
                    });
                });

                res.json({
                    status: 200,
                    result: 'ReadDirSuccess',
                    filedata: filelist.sort(this.JsonSort)
                });

            }
        });
    }

    // 删除指定笔记文件
    DeleteFile(res, name){
        fs.unlink(this.filepath + name + '.md', function(err) {
            if (err) {
                res.json({
                    status: 404,
                    result: 'DeleteFileError'
                });
            }else {
                res.json({
                    status: 200,
                    result: 'DeleteFileSuccess'
                });
            }
        });
    }

    // 解密前端传递过来的加密字符串
    DecryptBinary(total2str) {
        var goal = "";
        var arr = total2str.split(' ');
        for (var i = 0; i < arr.length; i++) {
            var str2 = arr[i];
            var num10 = parseInt(str2, 2); ///< 2进制字符串转换成 10进制的数字
            goal += String.fromCharCode(num10); ///< 将10进制的unicode编码, 转换成对应的unicode字符
        }
        return goal;
    }

    // 排序json数据
    JsonSort(x,y){
        return y.creatorTime - x.creatorTime
    }
}

module.exports = FileBse;

