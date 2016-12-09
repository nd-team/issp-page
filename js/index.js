$(document).ready(function(){
    $('.announcement .close').click(function(){
        $('.announcement').remove();
    });
    $('#nav ul li a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
});