$(function(){

    $('.group-all').on('click', function(){
        $('.module').show();
    });
    $('.close').on('click', '.close_module', function(){
        $('.module').hide();
        $('.module-two').hide();
    })
    $('.add-people').on('click', '.added', function(){
        $('.module-two').show();
        $('.module').hide();
    })
    $('.talk-news').on('click', '.talk', function(){
        $('.module-two').show();
    })
});
