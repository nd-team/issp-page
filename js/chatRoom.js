$(document).ready(function () {
    (function($){
        $.fn.myTab = function(options){//将对象作为参数传进去
            var defult = {parent:"",index:null},
                setting =$.extend(defult,options);//extend方法合并两个对象，如果两个对象有相同属性，则后面的那个对象的属性覆盖前面那个对象的属性。
            $(this).find("li").on("click",function(){
                var $this=$(this),
                    $index =$this.index();
                $this.addClass("current").siblings().removeClass("current");
                $(setting.parent).children("ul").eq($index).show().siblings().hide();//切换标签对应的内容


            })
            //判断进入页面显示那个标签样式和内容
            if(setting.index==null){
                $(this).find('li').eq(0).click();
            }else{
                $(this).find('li').eq(options.index).click();
            }
        }
    })(jQuery)

    $(".info-tab").myTab({parent:".tab-content",index:0});

    $('.avatar').on('click', '.editor', function(){
        $(".modify-modal").show();
    });
    $(".close").on('click', function(){
          $(".modify-modal").hide();
    });

    // 我的好友信息弹窗
    $('.picture').on('click', function(){
        if(!$(this).hasClass('same-big')){
            $(this).addClass('same-big');
        }else {
            $(this).removeClass('same-big');
        }
    });

    // 关注
    var onOff = true;
    var Attention = $('.attention');
    Attention.on('click', function(){

        if(Attention.onOff) {
            $(this).text('关注');
            Attention.onOff = false;
        }else{
            $(this).text('取消关注');
            Attention.onOff = true;
        }

    });

    // 文章点赞效果
    $(".heart").click(function () {
        //$(".zan").removeClass("zan1");
        $(this).toggleClass("zan1");
        var classname=$(this).attr("class");
        //alert(classname);
        var zan_num=parseInt($('>span',this).text());
        //alert(zan_num);
        if(classname == "zan zan1"){
            zan_num +=1;
            //alert(zan_num);
            $('>span',this).text(zan_num);

        }else if(classname== "zan"){
            zan_num -=1;
            //alert(zan_num);
            $('>span',this).text(zan_num);
        }
    });
    /*鼠标经过效果*/
    $('.photo').on('mouseover','img', function(){
        $(this).find('.modal-message').show();
    });
    $('.photo').on('mouseout','img', function(){
        $(this).find('.modal-message').hide();
    });


    $('.friend').scroll(function(){
        // $('.content-right').css('overflow','auto');/**/
        alert('123')
    });
})
