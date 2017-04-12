/**
 * Created by ike on 2016/12/9.
 */
$(function(){
    $('.log-red').hover(function(){
        $(".login-WeChat",this).toggle();
    });
    $('.login-page:nth-of-type(2)').hide();
    $('.login-tabs a').click(function(){
        $(this).addClass('current').siblings().removeClass('current');
        $(".login-page").eq($(this).index()).show().siblings().hide();
  /*   $(".login-page").css("display", "none");
       $(".login-page").eq($(this).index()).css("display", "block")*/
});
    $(".checkedNum").each(function(i){
    $(this).attr({"id":"checked"+i});
    $(this).next("label").attr("for","checked"+i);
})
    $('#form').validate({
        rules:{
            username:{
                required:true,
            },
            password:{
                required:true,
                minlength:6,
                maxlength:14
            }
        },
        messages:{
            username:{
                required:"用户名不能为空！",
            },
            password:{
                required:"密码不能为空！",
                minlength:"密码长度为6-14位!",
                maxlength:"密码长度为6-14位!"
            }
        }
    });
});
    function CountSize(){
    $("LabelInfo").each(function(){
        var LabelInfo=$(this).parent().find("label").outerWidth(true);
        $(this).css("width",$(this).parent().width()-LabelInfo-6+"px");
    });
}
