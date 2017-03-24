/**
 * Created by ike on 2017/3/13.
 */
$(function () {
    $(".select-left button").click(function () {
        $obj = $('.select-sele select option:selected').clone(true);
        $('.select-right select').append($obj);
    });
    $('option').dblclick(function(){
        $(this).remove();
    });
    //入职情况统计
    $(".summary .sum-bot").hide();
    $(".dataBottom2 button").click(function () {
        $(".summary .sum-bot").show();
    });
    //查看附件
    $(".file-four").hide();
    $('.fill-title ul li').click(function () {
        $(this).addClass('cur').siblings().removeClass('cur');
        $('.file-all>ul:eq(' + $(this).index() + ')').show().siblings().hide();
    })
    //切换
        $('.boa-body').find("ul").not("ul:nth-of-type(1),.footer").hide();
        $('.boa-title ul li').click(function () {
            $(this).addClass('boa-cur').siblings().removeClass('boa-cur');
            $(this).parents('.boarding').find('.boa-body ul').eq($(this).index()).show().siblings().hide();
        })
});