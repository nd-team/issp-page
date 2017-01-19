$(function(){

    $('.group-all').on('click', function(){
        $('.module').show();
    });
    $('.close').on('click', function(){
        $('.module').hide();
        $('.module-two').hide();
        $('.module-next').hide();
    });
    $('.add-people').on('click', '.added', function(){
        $('.module-next').show();
        $('.module').hide();
    });
    $('.talk-news').on('click', '.talk', function(){
        $('.module-two').show();
    });

    $(".my-friends").on('click', '.good-friends' ,function() {
        $(".my-friends-list").slideToggle();
    });
    $(".group-friends").on('click', '.good-friends' ,function() {
        $(".group-friends-list").slideToggle();
    });

    $('.same-circle').on('click',function(){
        if(!$(this).hasClass('circle')){
            $(this).addClass('circle').children('svg').show();
            $(this).parents('.all-member').addClass('current');
        }else{
            $(this).removeClass('circle').children('svg').hide();
            $(this).parents('.all-member').removeClass('current');
        }
    });
});
