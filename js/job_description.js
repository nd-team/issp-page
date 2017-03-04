$(document).ready(function () {
    $(".header-menu").on('click',function() {
        $(".menu").slideToggle();
    });
    $(".list-text p").on('click','.more',function() {
        $(".can").slideToggle();
        var More = "";
        More += ''
    });
    $(".see-children").on('click','span',function() {
        // console.log($(this).width());
        var inx = $(this).index();
        var selfText = $(this).text();
        var num = selfText.length;
        var width = $(this).width();
        var titleText = $(this).parent().siblings().children().eq(inx).text();
        var fontSize = $(this).css("font-size").split("p")[0]*num;
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
});
String.prototype.visualLength = function(self)
{
    var ruler = $(self);
    ruler.text(this);
    return ruler[0].offsetWidth;
}