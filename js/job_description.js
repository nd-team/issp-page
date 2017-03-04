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
        var inx = $(this).index();
        var selfText = $(this).text();
        var num = selfText.length;
        var titleText = $(this).parent().siblings().children().eq(inx).text();
        if (num>8){
            $(".module").show();
            $(".module .see-type").text(titleText);
            $(".module .see-description").text(selfText);
        }else {
            return
        }
        console.log(num);
    });
    $(".module .see-module").on('click','.btn',function() {
        $(".module ").hide();
    });
});
