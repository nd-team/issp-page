$(function(){

    $(".see-children").on('click','span',function() {
        var inx = $(this).index(),
            selfText = $(this).text(),
            num = selfText.length,
            width = $(this).width(),
            titleText = $(this).parent().siblings().children().eq(inx).text(),
            fontSize = $(this).css("font-size").split("p")[0]*num;
            console.log(fontSize,width);
        if (fontSize>width){
            $(".module").show();
            $(".module .see-type").text(titleText);
            $(".module .see-description").text(selfText);
        }else {
            return
        }
    });

    $(".module .see-module").on('click','.btn',function() {
        $(".module ").hide();
    });

    // 选择下拉菜单
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
    })(jQuery);

    $(".list").myTab({parent:".content-tab",index:0});
});
