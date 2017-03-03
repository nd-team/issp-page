$(document).ready(function () {
    $(".header-menu").on('click',function() {
        $(".menu").slideToggle();
    });
    $(".list-text p").on('click','.more',function() {
        $(".can").slideToggle();
    });
    $(".see-children").on('click','span',function() {
        $(".module").show();
    });
    $(".module .see-module").on('click','.btn',function() {
        $(".module ").hide();
    });
    $(".see-children span").each(function(){
        var maxwidth = 8;
        if($(this).text().length>maxwidth){
            $(this).text($(this).text().substring(0,maxwidth));
            $(this).html($(this).html()+'…');
        }
    });
});
