$(document).ready(function(){

    //表单验证
    $("#form").validate({
        rules:{
            name:"required",
            email:{
                required:true,
                email:true
            },
            password: {
                required: true,
                minlength:6
            },
            confirm_password: {
                required: true,
                minlength: 6,
                equalTo: "#password"
            },
        },
        messages:{
            email:{
                required:"E-mail不能为空",
                email:"E-mail地址不正确"
            },
            password: {
                required: "请输入密码",
                minlength: "密码长度不能小于6个字母"
            },
            confirm_password: {
                required: "请再输入密码",
                minlength: "密码长度不能小于6个字母",
                equalTo: "两次密码输入不一致"
            }
        }
    });
    $('#form').on('keyup blur','input','.error',function(){
        var inputLength = $('input').length;
        if($('input.valid').length==inputLength){
            $('#next').removeAttr("disabled").removeClass('disabled')
        }else {
            $('#next').attr("disabled",true).addClass('disabled')
        }
    });

    //验证码计时器
    var wait=60;
    function time(){
        if(wait==0){
            $('.send-code input').removeAttr('disabled').val("发送验证码").removeClass('disabled');
            wait = 60;
        }else{
            $('.send-code input').attr('disabled',true).val("重新发送(" + wait + ")").addClass('disabled');
            wait--;
            setTimeout(function() {
                time()
            },
            1000)
        }
    }
    $('#send-btn').click(function(){
        time();
    })
});