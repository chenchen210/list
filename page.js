function nametest(e){
    if(e == ""){
        $('span#nametest').html('用户名不能为空')
    }
    if (!/^[a-zA-Z0-9_-]{0,16}$/.test(e)) {
        $('span#nametest').html('用户名格式支持字母、数字、下划线')
    }
}
function phonetest(e){
    if(!/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test(e)){
        $('span#phonetest').html('手机号码格式不正确')
    }
}
function passtest(e){
    if(!/^[0-9a-zA-Z_]{4,15}$/.test(e)){
        $('span#pwtest').html('密码格式不符合要求')
    }
}
$(function(){
    $('input#getId').click(function(){
        console.log(12345);
        var num = 30;
        var timer = setInterval(function () {
        if (num > 1) {
            num--;
            $('input#getId').val("重新发送(" + num + ")").attr("disabled", "disabled");
            $('input#getId').css('background', '#B8B8B8');
        } else {
            $('input#getId').val("获取验证码").removeAttr("disabled");
            $('input#getId').css('background', '#435E97');
            clearInterval(timer);
        }
    }, 1000)
    })
    $("button").click(function(){
        var name=$('input#name').val(),
            phone=$('input#telephone').val(),
            pass=$('input#password').val();
        console.log(name,phone,pass);
        nametest(name);
        phonetest(phone);
        passtest(pass);
    });
})

