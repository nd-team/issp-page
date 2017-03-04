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
        var test = selfText.visualLength($(this));
        var titleText = $(this).parent().siblings().children().eq(inx).text();
        if (num>8){
            $(".module").show();
            $(".module .see-type").text(titleText);
            $(".module .see-description").text(selfText);
        }else {
            return
        }
        console.log(test);
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