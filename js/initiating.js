/**
 * Created by ike on 2017/3/22.
 */
//发起惩罚
(function($){
    $.fn.extend({
        Scroll:function(opt,callback){
            //参数初始化
            if(!opt) var opt={};
            var _btnUp = $("."+ opt.up);//Shawphy:向上按钮
            var _btnDown = $("."+ opt.down);//Shawphy:向下按钮
            var timerID;
            var _this=this.eq(0).find("ul:first");
            var     lineH=_this.find("li:first").height(), //获取行高
                line=opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH,10), //每次滚动的行数，默认为一屏，即父容器高度
                speed=opt.speed?parseInt(opt.speed,10):500; //卷动速度，数值越大，速度越慢（毫秒）
            timer=opt.timer //?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒）
            if(line==0) line=1;
            var upHeight=0-line*lineH;
            //滚动函数
            var scrollUp=function(){
                _btnUp.unbind("click",scrollUp); //Shawphy:取消向上按钮的函数绑定
                _this.animate({
                    marginTop:upHeight
                },speed,function(){
                    for(i=1;i<=line;i++){
                        _this.find("li:first").appendTo(_this);
                    }
                    _this.css({marginTop:0});
                    _btnUp.bind("click",scrollUp); //Shawphy:绑定向上按钮的点击事件
                });

            }
            //Shawphy:向下翻页函数
            var scrollDown=function(){
                _btnDown.unbind("click",scrollDown);
                for(i=1;i<=line;i++){
                    _this.find("li:last").show().prependTo(_this);
                }
                _this.css({marginTop:upHeight});
                _this.animate({
                    marginTop:0
                },speed,function(){
                    _btnDown.bind("click",scrollDown);
                });
            }
            //Shawphy:自动播放
            var autoPlay = function(){
                if(timer)timerID = window.setInterval(scrollUp,timer);
            };
            var autoStop = function(){
                if(timer)window.clearInterval(timerID);
            };
            //鼠标事件绑定
            _this.hover(autoStop,autoPlay).mouseout();
            _btnUp.css("cursor","pointer").click( scrollUp ).hover(autoStop,autoPlay);//Shawphy:向上向下鼠标事件绑定
            _btnDown.css("cursor","pointer").click( scrollDown ).hover(autoStop,autoPlay);
        }
    })
})(jQuery);
function myclick(selector,classname) {
    $(selector).click(
        function(){
            $(this).addClass(classname).siblings().removeClass(classname);
        })
}
function myhide(className1,className2,className3){
    var count =  $(className1).find("ul li").length;
    if (count >=7) {
        $(className2,className3).show();
        alert("122")
    }else{
        $(className2,className3).hide();
    }
}
//申诉
/*   function select_box(edier,depart_pop){
 $(edier).on('click',function(e){
 $(this).parent(".choice").siblings().find(depart_pop).hide();
 $(this).parent().find(depart_pop).show();
 e?e.stopPropagation():event.cancelBubble = true;
 $(depart_pop).children(".pop").find("ul li").click(function(e){
 var selectText=$(this).text();
 $(this).parents(depart_pop).hide();
 $(this).parents(".choice").find(edier).val(selectText);
 e?e.stopPropagation():event.cancelBubble = true;
 });
 return false;
 })
 }*/
$(function () {
    //申诉
    //产品众筹得详情页
    $('.right-tit').click(function () {
        $(this).nextAll("p").animate({height: 'toggle', opacity: 'toggle'}, "slow");
    });
    $('.check-more').click(function () {
        $(this).children("a").toggle();
        $(".f1-all").toggleClass("height-au")
    });
   //回报设置
    $(".del").click(function () {
        $(this).parents(".gods").remove()
    });

     //发起处罚
    //切换页面
    $('.body-all').find(".in-body").not(".in-body:nth-of-type(1)").hide();
    $(".in-top ul li:not('.in-add')").click(function(){
        $('.in-top ul li i').removeClass('cur2');
        $('.in-top ul li').removeClass('cur');
        $(this).addClass('cur');
        $(this).children('i').addClass('cur2');

        $('.body-all>div:eq(' + $(this).index() + ')').show().siblings().hide();
    });
    $('.in-top ul li i').click(function(){
        $(this).parent().remove();
    });
    $('.x-body ul li').not('.text-title').click(function(){
        $(this).addClass('now').siblings().removeClass('now');
    });
    //单击改变背景颜色
    //部门添加个人添加切换
    $(".choice:nth-of-type(2)").hide();
    $(".add-type li").click(function () {
        $(this).addClass("now").siblings().removeClass("now");
        $('.choice-all>div:eq(' + $(this).index() + ')').show().siblings().hide();
    });
    //上下显示
    $(".l1").Scroll({ line: 7, speed: 500,up: "l2", down: "l3" });
    $(".l4").Scroll({ line: 7, speed: 500,up: "l5", down: "l6" });
    $(".r4").Scroll({ line: 7, speed: 500,up: "r5", down: "r6" });
    $(".r1").Scroll({ line: 7, speed: 500,up: "r2", down: "r3" });
    //改变背景颜色
    myclick('.pop-left ul li','left-cur');
    myclick('.pop-right ul li','left-cur');
    //显示右边姓名
    $(".pop-left ul li").click(function () {
        $(this).parents(".pop").find(".pop-right").show();
    });
    //当条数小于7时上下按钮隐藏
    myhide('.r4','.pro-top2','pro-bottom2');
    var count2 = $(".r4 ul").find("li").length;
    var count3 = $(".l4 ul").find("li").length;
    if (count2 >=7) {
        $(".pro-top2,.pro-bottom2").show();
    }else{
        $(".pro-top2,.pro-bottom2").hide();
    }
    if (count3 >=7) {
        $(".pro-top,.pro-bottom").show();
    }else{
        $(".pro-top,.pro-bottom").hide();
    }
    //搜索框变大
    $(".pop-tit-search").click(function(){
        $(this).animate({width:"228px"});
        $(this).children('.search').animate({width:"128px"});
        $(this).addClass('search-cur');
        $(this).children('.search').val("搜索");
    });
    //文本框
    /* select_box(".edier",".depart-pop");*/
    $(".depart-pop,.hide-s2").hide();
    $(".choice-all .choice input").click(function () {
        $(this).next().show()
    })
    $(".all-add button").click(function () {
        $(this).parents('.all-add').hide();
        $('#modal').hide();
        $('#modalbg').hide();
    });
  });