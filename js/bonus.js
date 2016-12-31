/**
 * Created by ike on 2016/12/27.
 */
$(document).ready(function(){
    $('.article ul li').click(function() {
        $(this).addClass('now').siblings().removeClass('now');
        $('.text>p:eq(' + $(this).index() + ')').show().siblings().hide();
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
})