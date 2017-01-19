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
    }
    
    var dailyLen = $('.daily').children('.dail-list').length;
    var dailypage =Math.ceil(dailyLen/20);

//分页
    laypage({
        cont: 'pages', //容器。值支持id名、原生dom对象，jquery对象,
        pages: dailypage, //总页数
        first: 1, //将首页显示为数字1,。若不显示，设置false即可
        last: dailypage, //将尾页显示为总页数。若不显示，设置false即可
        prev: '上一页', //若不显示，设置false即可
        next: '下一页', //若不显示，设置false即可
        skip:true,
        skin:'#05afe2'//皮肤
    });
    nav();
});