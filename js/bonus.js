/**
 * Created by ike on 2016/12/27.
 */
$(document).ready(function(){
    $('.article ul li').click(function() {
        $(this).addClass('now').siblings().removeClass('now');
        $('.text>div:eq(' + $(this).index() + ')').show().siblings().hide();
    })
    $(".like").click(function () {
        $(this).toggleClass("nowa");
        var classname=$(this).attr("class");
        var num=parseInt($('>a',this).text());
        if(classname == "like nowa"){
            num +=1;
            $('>a',this).text(num);
        }else if(classname== "like"){
            num -=1;
            $('>a',this).text(num);
        }
    })
    $('.current').click(function(){
        $(this).attr('src',$(this).attr('src')=='/images/honor/grayheart.png'?'/images/honor/redheart.png':'/images/honor/grayheart.png');
    });
    $('.already a').click(function(){
        $(".already a").toggleClass("cur");
        if(
            $(this).hasClass("cur")){
            $(this).html("关注");
        }else{
            $(this).html("已关注");
        }
    })
   /* $('.pagination-click li').not(".next").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.pagination-click .next').click(function () {
        var current = $('.pagination-click .active').index();
        current++;
        var length = $('.pagination-click li').not(".next").length;
        if (current >= length) {
            current = length - 1;
        }
        $('.pagination-click li').removeClass('active')
        $('.pagination-click li').eq(current).addClass('active');
    })*/
//活动
    $('.act-com .close').click(function(){
        $('.act-com').remove();
    });
    $('.act-head a:not(:last),.act-head2 a:not(:last)').click(function(){
        $(this).addClass('cur').siblings().removeClass('cur');
    });

    //排行
    $('.rank-right').find("table").not("table:nth-of-type(1)").hide();
    $('.rank-left ul li').click(function () {
        $(this).addClass('current').siblings().removeClass('current');
        $('.rank-right>table:eq(' + $(this).index() + ')').show().siblings().hide();
    })
   //奖励圈

    $('b[data-title]').click(function(){
        var dataTitle = $(this).attr("data-title");
        $('#modalbg').show();
        $('#modal').show();
        $('#modal .'+dataTitle).show();
        var modal1 = document.getElementById("modal");
        var sWidth=document.body.scrollWidth;
        var wHeight=document.documentElement.clientHeight;
        var dHeight=modal1.offsetHeight;
        var dWidth=modal1.offsetWidth;
        modal1.style.top=wHeight/2-dHeight/2+"px";
        modal1.style.left=sWidth/2-dWidth/2+"px";
    });
    var x=$("b[data-title]").length;
    var idStr = "";
    var idList = new Array();
    for (var i = 0; i <x; i++) {
        var id = "issue" + (i+1);
        var tem = "";
        tem += "<img src='/images/reward/b"+parseInt(i+1)+".jpg'><a href='javascript:void(0)' class='close'>关闭</a>";
        var div = $("<div class='" + id + " m-con'>" + tem + "</div>");
        $("#modal").append(div);
        idStr += id + " ";
        idList.push(id);
    }
    var eachId = "";
    $("#modal >div").each(function() {
        eachId += $(this).attr("id") + " ";
    });

    var listId = "";
    for (var key in idList) {
        listId += idList[key] + " ";
    }
    $('.close').click(function(){
        $(this).parents('.m-con').hide();
        $('#modal').hide();
        $('#modalbg').hide();
    });
});

