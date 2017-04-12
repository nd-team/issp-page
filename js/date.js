/**
 * Created by ike on 2017/3/15.
 */
$(function () {
    var i18n = {
        previousMonth   : '上个月',
        nextMonth       : '下个月',
        months          : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        weekdays        : ['周日','周一','周二','周三','周四','周五','周六'],
        weekdaysShort   : ['S','M','T','W','T','F','S']
    };
    var datepicker = new Pikaday({
        numberOfMonths: 2,
        field: jQuery('#datepicker')[0],
        minDate: new Date('2000-01-01'),
        maxDate: new Date('2020-12-31'),
        yearRange: [2000,2020],
        i18n: i18n,
        onSelect: function() {
            var date = document.createTextNode(this.getMoment().format('YYYY-MM-DD') + ' ');
        }
    });

    //发起处罚
    $('.body-all').find(".in-body").not(".in-body:nth-of-type(1)").hide();
    $('a[data-title]').click(function(){
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
 //荣耀信息录入
    $('.sure-award').click(function(){
        $(".sure-award").toggleClass("cur");
    });
    $(".scale span").mouseover(function (){
        $(this).parents(".ratings_bars").find("#title0").show();
        $(this).parents(".ratings_bars").find("#title1").show();
    }).mouseout(function (){
        $(this).parents(".ratings_bars").find("#title0").hide();
        $(this).parents(".ratings_bars").find("#title1").hide();
    });
    if($(".scale div").width(0)){
        $(".scale span").css("margin-left","-4px")
    }
});