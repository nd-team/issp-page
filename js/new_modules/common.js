$(document).ready(function(){
    $('.nav').on("click","a",function(){
        $('.nav li').removeClass('active');
        $('.nav h3').removeClass('big');
        $(this).parent().addClass('active');
        $(this).parents(".nav-list").children("h3").addClass("big");
    });
    $('.list').on("click","li",function(){
        $(this).addClass("current").siblings().removeClass("current")
    });
    $('.list-text').on("click",".more",function(){
        $(this).parents("section").children('.can').stop()
        if(!$(this).hasClass("ac")){
            $(this).addClass("ac");
            $(this).parents("section").children('.can').slideDown()

        }else {

            $(this).removeClass("ac");
            $(this).parents("section").children('.can').slideUp()

        }

    })
});