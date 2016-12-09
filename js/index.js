$(document).ready(function(){
    //关闭公告
    $('.announcement .close').click(function(){
        $('.announcement').remove();
    });
    //注销账户
    $('.topmenu .username a').click(function(){
        $('.topmenu .log').toggle();
    });

    //侧栏导航样式
    function nav(){
        $('#nav ul li a').click(function(){
            $(this).parent().addClass('active').siblings().removeClass('active');
            var point = $(this).has("i").length;
            if(point=="1"){
                $(this).children("i").remove();
            }
        });
    }


    //个人消息
    function daily(){
        $('.daily .dail-list a').click(function(){
            $('#modal').show();
            $('#modalbg').show();
            if($(this).parents('.dail-list').hasClass('unread')){
                $(this).parents('.dail-list').removeClass('unread')
            }
        });
        $('#modal .close').click(function(){
            $('#modal').hide();
            $('#modalbg').hide();
        })

        //分页
        var pageLen = $('.daily .page .page-list a').length;
        $('.daily .page .page-list a').click(function(){
            var current = $(this).index();
            $('.daily .page button').removeClass('disabled');
            $(this).addClass('active').siblings().removeClass('active');
            if(current=="0"){
                $('.daily .page .prev,.daily .page .first').addClass('disabled');
            }else if(current>=pageLen-1){
                $('.daily .page .next,.daily .page .end').addClass('disabled');
            }
        });
        $('.daily .page button').on("click",function(){
            var btnName = $(this).attr('class');
            var ind = $('.daily .page .page-list .active').index();
            $('.daily .page .page-list a').removeClass('active');
            $('.daily .page button').removeClass('disabled');
            if(btnName=="first"){
                $(this).addClass('disabled');
                $('.daily .page .prev').addClass('disabled');
                $('.daily .page .page-list a').eq(0).addClass('active');
            }else if(btnName=="end"){
                $('.daily .page .page-list a').eq(pageLen-1).addClass('active');
                $(this).addClass('disabled');
                $('.daily .page .next').addClass('disabled');
            }else if(btnName=="prev"){
                    ind--;
                    if(ind<=0){
                        ind=0;
                        $(this).addClass('disabled');
                        $('.daily .page .first').addClass('disabled');
                    }
                    $('.daily .page .page-list a').eq(ind).addClass('active').siblings().removeClass('active');
            } else if(btnName=="next"){
                ind++;
                if(ind>=pageLen-1){
                    ind = pageLen-1;
                    $(this).addClass('disabled');
                    $('.daily .page .end').addClass('disabled');
                }
                $('.daily .page .page-list a').eq(ind).addClass('active').siblings().removeClass('active');
            }
        });
        $('.daily .page .jump a').click(function(){
            var val = $('.daily .page .jump input').val();
            if(val>pageLen||val<="0"){
                return
            }else {
                $('.daily .page button').removeClass('disabled');
                if(val=="1"){
                    $('.daily .page .prev,.daily .page .first').addClass('disabled');
                }else if(val>=pageLen){
                    $('.daily .page .next,.daily .page .end').addClass('disabled');
                }
                $('.daily .page .page-list a').eq(val-1).addClass('active').siblings().removeClass('active');
            }
        })
    }

    daily();
    nav();

});