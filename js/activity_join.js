$(document).ready(function () {

    //点赞

   $('.all-zan').on('click', function(){
        var zan_num =$(this).children('span').text();
       if(!$(this).hasClass('active')){
           $(this).addClass('active');
           zan_num++;
           $(this).children('span').text(zan_num);
       }else{
           $(this).removeClass('active');
           zan_num--;
           $(this).children('span').text(zan_num);
       }

    });
});
