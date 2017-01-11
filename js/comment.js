/**
 * Created by ike on 2017/1/11.
 */
    $(function() {
    $('.reply_02').find("a:nth-of-type(1)").hide();
    $('.hide-comment').hide();
    //1
    $('.reply_q1').click(function(){
    $(this).find('.currenta').attr('src',$(this).find('.currenta').attr('src')=='/images/reward/already-fabulos.png'?'/images/reward/no-fabulous.png':'/images/reward/already-fabulos.png')
    $(this).toggleClass("nowa");
    var classname=$(this).attr("class");
    var num=parseInt($('>i',this).text());
    if(classname == "reply_q1 nowa"){
    num +=1;
    $('>i',this).text(num);
}else if(classname== "reply_q1"){
    num -=1;
    $('>i',this).text(num);
}
});
    $('.reply_02').click(function () {
    $(this).children("a").toggle();
    $(this).next(".reply_03").animate({height: 'toggle', opacity: 'toggle'}, "slow");
});
    $('.more').click(function () {
    $(this).parent("ul").find('.hide-comment').show();
    $(this).hide();
});
    $('button[data-title]').click(function(){
    var dataTitle = $(this).attr("data-title");
    $('#modalbg').show();
    $('#modal').show();
    $('#modal .'+dataTitle).show();
});
    $('.close').click(function(){
    $(this).parents('.m-con').hide();
    $('#modal').hide();
    $('#modalbg').hide();
});
    $(".content").find(".comment-bot button").click(function() {
    var evaluate = $(".comment-input").text();
    if (evaluate == "") {
    alert("你还没有输入任何评价的内容");
    return;
}
    $(".contents").prepend(
    "<div class='d-main'>"+
    "<div class='d-author'>"+
    "<ul>"+
    "<li class='user-inform'>"+
    "<a href='javascript:void(0)'>"+
    "<img src='/images/reward/name-icon.png'/>"+
    "<i>"+"鹿晗"+"</i>"+
    "</a>"+
    "<a href='javascript:void(0)'>"+
    "<img src='/images/reward/position.png'/>"+
    "<i>"+"歌手,影视明星"+"</i>"+
    "</a>"+
    "</li>"+
    "<li class='user-pic'>"+"<img src='/images/reward/user-name4.png'/>"+"</li>"+
    "<li class='user-explain'>"+
    "<p>"+"公司：MW文化传播娱乐有限公司"+"</p>"+
    "<p>"+"经验:123456"+"</p>"+
    "</li>"+

    "</ul>"+

    "</div>"+
    "<div class='d-content'>"+
    "<ul class='reply'>"+
    "<li>"+
    "<img src='/images/reward/date.png'/>"+
    "</li>"+
    "<li class='datetime'>"+"发表于"+"<i>"+year+"-"+month+"-"+day+"<i>"+hour+":"+min+":"+second+"</i>"+"</span>"+"</li>"+
    " <li class='reply-num'>"+"<button>"+"回复"+"<i>"+256+"</i>"+"</button>"+"<button>"+"赞"+"<i>"+256+"</i>"+"</button>"+"</li>"+
    "</ul>"+
    "<div class='reply_01'>"+evaluate+"</div>"+
    "</div>");
    $(".comment-input").text("");
});
    var dateDom = new Date();
    var year = dateDom.getFullYear();
    var month = dateDom.getMonth()+1;
    var day = dateDom.getDate();
    var hour = dateDom.getHours();
    var min = dateDom.getMinutes();
    var second = dateDom.getSeconds();
    //回复
    $(".content").find(".so-and-so02 button").click(function() {
    var evaluate02 = $(".so-and-so01").text();
    $(this).parent().parent().parent().find('.reply_06').prepend(
    "<div class='reply_05'>"+
    " <div class='reply_cont'>"+
    "<a href='javascript:void(0)' class='reply_name'>"+ "luhan"+"</a>"+
    evaluate02+"<i class='div2'>"+"</i>"+
    "<span class='reply_date'>"+"发表于"+"<a href='javascript:vodi(0)'>"+year+"-"+month+"-"+day+"<i class='times06'>"+hour+":"+min+":"+second+"</i>"+"</a>"+"</span>"+
    "<span class='reply_date2'>"+
    "<a href='javascript:void(0)' class='reply_q'>"+"回复"+"<i>"+"|"+"</i>"+"</a>"+
    "<a href='javascript:void(0)' class='reply_q1'>"+"<img src='/images/reward/no-fabulous.png' class='currenta'/>"+"<i>"+"15"+"</i>"+"</a>"+
    " </span>"+
    " </div>"+
    "</div>");
    $(".so-and-so01").text("");
})
    $('.so-and-so').hide();
    $('.reply_q').click(function () {
    var evaluate03 = $(this).parent().parent().find('.reply_name').text()
    $(this).parent().parent().parent().parent().children('.so-and-so').find('.so-and-so01').html('回复' +evaluate03+':');
    $(this).parent().parent().parent().parent().children('.so-and-so').eq($(this).index()).show();
    $(this).parent().parent().parent().css('border','0')
})
})
