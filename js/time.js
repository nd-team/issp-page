/**
 * Created by ike on 2017/3/3.
 */
$(document).ready(function(){
    var i18n = {
        previousMonth   : '上个月',
        nextMonth       : '下个月',
        months          : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        weekdays        : ['周日','周一','周二','周三','周四','周五','周六'],
        weekdaysShort   : ['S','M','T','W','T','F','S']
    }
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
    //var inPun05= "<img src='/images/reward/inPun05.png'>";
    //var div = $("<i>" + inPun05 + "</i>");
    // $(".InTop ul li").append(div);
    //  $(".InTop ul li").append(div);
    // $(".InTop ul li").hasClass('.cur').append(div);
    /* if($('.InTop ul li').hasClass('cur')){
     $(this).not('.cur').addClass('blueColor');
     }*/
    $('.InBodyAll').find(".InBody").not(".InBody:nth-of-type(1)").hide();
    $(".InTop ul li:not('.InAdd')").click(function(){
        $('.InTop ul li i').removeClass('cur2');
        $('.InTop ul li').removeClass('cur');
        $(this).addClass('cur');
        $(this).children('i').addClass('cur2');

        $('.InBodyAll>div:eq(' + $(this).index() + ')').show().siblings().hide();
    });
    $('.InTop ul li i').click(function(){
        $(this).parent().remove();
    });
    $('.xBody ul li').not('.textTitle').click(function(){
        $(this).addClass('now').siblings().removeClass('now');
    });
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

    //荣誉添加
    $('.sureAward').click(function(){
        $(".sureAward").toggleClass("cur");
    });
    $('.timeBranch input').bind({
        focus:function(){
            if (this.value == this.defaultValue){
                $('.time').show();
            }
        },
        blur:function(){
            if (this.value == ""){
                $('.time').hide();
            }
        }
    });
});