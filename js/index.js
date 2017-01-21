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
    $('#modal .close').click(function(){
        $('#modal').hide();
        $('#modalbg').hide();
    })
    nav();
    var arr = [];
    var readed = localStorage.getItem('read');
    arr.push(readed);
    $('.daily').on('click','a',function(){
        daily();
        if($(this).parents('.dail-list').hasClass('unread')){
            $(this).parents('.dail-list').removeClass('unread')
        }
        arr.push($(this).attr('data-attr'));
        localStorage.setItem('read',arr);
    });

    $.get('/data/guangdong.json',function(data){

        var total = Math.ceil(data.length/10);
        var a = "<div id='dailyq'>";
        for(var i=0,len=10; i<len; i++){
            a+="<div class='dail-list unread'><p><a href='javascript:void(0)' data-attr ="+data[i].zip+ ">"+data[i].name+"</a></p></div>";
        }
        a+="</div>";
        $('.daily').html(a);
        Readed();
        laypage({
            cont: 'pages', //容器。值支持id名、原生dom对象，jquery对象,
            pages: total, //总页数
            first: '首页', //将首页显示为数字1,。若不显示，设置false即可
            last: '尾页', //将尾页显示为总页数。若不显示，设置false即可
            prev: '上一页', //若不显示，设置false即可
            next: '下一页', //若不显示，设置false即可
            skip:true,
            groups: 5, //连续显示分页数
            skin:'#05afe2',//皮肤
            jump:function(obj, first){
                if(!first){ //点击跳页触发函数自身，并传递当前页：obj.curr
                    var listLen = obj.curr*10;
                    if(listLen>data.length){
                        listLen=data.length
                    }
                        var a = "<div id='dailyq'>";
                        for(var i=(obj.curr-1)*10,len=listLen; i<len; i++){
                            a+="<div class='dail-list unread'><p><a href='javascript:void(0)' data-attr="+data[i].zip+">"+data[i].name+"</a></p></div>"
                        }
                        a+="</div>";
                        $('.daily').html(a);
                        Readed()

                }
            }
        });

    });
    function Readed(){
        var readed = localStorage.getItem('read');
        if(readed){
            var readArr = readed.split(',');
            for(var i=0,len=readArr.length; i<len; i++){
                for(var j=0,len=$('.dail-list').length; j<len; j++){
                    if($('.daily .dail-list').eq(j).find('a').attr('data-attr')==readArr[i]){
                        $('.daily .dail-list').eq(j).removeClass('unread');
                    }
                }
            }
        }
    }

});


function daily(){
        $('#modal').show();
        $('#modalbg').show();
}
