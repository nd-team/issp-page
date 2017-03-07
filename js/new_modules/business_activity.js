$(document).ready(function(){
    $('.nav').on("click","a",function(){
        $('.nav li').removeClass('active')
        $(this).parent().addClass('active')
    });
    $('.list').on("click","li",function(){
        $(this).addClass("current").siblings().removeClass("current")
    });
    $('.list-text').on("click",".more",function(e){

        if(!$(this).hasClass("ac")){
            $(this).addClass("ac");
            $(this).parents("section").children('.can').slideDown()
        }else {


            $(this).removeClass("ac");
            $(this).parents("section").children('.can').slideUp()

        }

    })
});