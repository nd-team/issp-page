$(document).ready(function(){
    $(".imglay").on("click","figure a",function(){
        $(this).addClass('active').parent().siblings().children('a').removeClass('active')
    })
})