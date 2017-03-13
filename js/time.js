/**
 * Created by ike on 2017/3/3.
 */
$(document).ready(function(){
    //物资入库
    $('.select_b1').hide();
    function select_box(box_se,select_b1) {
        $(document).click(function () {
            $(select_b1).hide();
        });
        $(box_se).on('click',function(e){
            $(".content-input ul li").siblings().find(".select_b1").hide();
            //$(this).parent().find(select_b1).width($(this).width());
            $(this).parent().find(select_b1).show();
            e?e.stopPropagation():event.cancelBubble = true;
            $(select_b1).find("a").click(function(e){
                var selectText=$(this).text();
                $(this).parents(select_b1).hide();
                $(this).parents("li").find(box_se).val(selectText);
                e?e.stopPropagation():event.cancelBubble = true;
            });
        });
        return false;
    }
    select_box(".box_se",".select_b1");
    //日历
/*    var i18n = {
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
    });*/


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



//分页
        laypage({
        cont: $('#pages2'),  //容器。值支持id名、原生dom对象，jquery对象,
        pages: 20, //总页数
        skin: 'molv', //皮肤
        first: 1, //将首页显示为数字1,。若不显示，设置false即可
        last: 20, //将尾页显示为总页数。若不显示，设置false即可
    });





});