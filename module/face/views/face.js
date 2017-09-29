function PostYouData(_i, api) {
    if (CheckUrl(_i)) {
        //展示进度条
        $("#load-progress").show();

        $.ajax({
            type: 'POST',
            dataType: "json",
            url: "https://api-cn.faceplusplus.com/facepp/v3/detect",
            data: {
                api_key: 'xfXREfL_pXgnqK2GedOunNPN2MFYSsPR',
                api_secret: 'x0PGyvHoVSjX19KlkjH1Ct7Md5wxz8aV',
                image_url: _i,
                return_attributes: 'gender,age,smiling,glass,emotion,ethnicity,beauty,mouthstatus,skinstatus'
            },
            success: (data) => {


                var result = data.faces[0].attributes;
                console.log(result);

                // 年龄
                var age = result.age.value;
                // 性别
                var gender = result.gender.value;
                gender == 'Male' ? gender = '帅哥' : gender = '美女';

                // 种族
                var ethnicity = result.ethnicity.value;
                if (ethnicity == 'Asian') {
                    ethnicity = '亚洲人'
                } else if (ethnicity == 'White') {
                    ethnicity = '白人'
                } else {
                    ethnicity = '黑人'
                }

                //女性认为的颜值
                var female_score = result.beauty.female_score
                //男性认为的颜值
                var male_score = result.beauty.male_score

                if (female_score >= '80' || male_score >= '80') {
                    $("#showlow").hide(50);
                    $("#showeyes").show(100);
                } else {
                    $("#showeyes").hide(50);
                    $("#showlow").show(100)
                }


                var glass = result.glass.value;
                switch (glass) {
                    case 'None':
                        glass = '不佩戴眼镜';
                        break;
                    case 'Dark':
                        glass = '佩戴墨镜';
                        break;
                    case 'Normal':
                        glass = '佩戴普通眼镜';
                        break;
                }


                // 设置头像地址
                $("#face-logo").attr('src', _i);
                // 设置年龄
                $("#age").text('年龄：' + age + ' 岁 / ' + '性别：' + gender + ' / 种族：' + ethnicity);
                // 设置颜值
                $("#beauty").text('颜值(100) 女性打分：' + female_score + '，男性打分：' + male_score);

                $("#userinfo").text('你是一个' + glass + '的' + gender + '哦！');

                //隐藏进度条
                $("#load-progress").hide();

                // 显示人脸识别的结果页面
                $("#jieguo").show(100);
            },
            error: function (xhr) {
                $.toast({
                    eading: '提示',
                    text: '请求失败，请检查图片URL和网络状况',
                    icon: 'info',
                    position: 'top-right',
                    bgColor: '#FF1356',
                    textColor: 'white'
                })
            }
        })
    } else {
        $.toast({
            eading: '提示',
            text: '图片URL不正确',
            icon: 'info',
            position: 'top-right',
            bgColor: '#FF1356',
            textColor: 'white'
        })
    }
}

function closeInfo() {
    $("#load-progress").hide();
    $("#jieguo").hide(100);
    $("#textfield-input").val('')
}

function CheckUrl(str) {
    var RegUrl = new RegExp();
    RegUrl.compile("^[A-Za-z]+://[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&\?\/.=]+$");
    if (!RegUrl.test(str)) {
        return false;
    }
    return true;
}
