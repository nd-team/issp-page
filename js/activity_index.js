$(function(){
    $('#dowebok').fullpage({
        navigation: true,
        scrollingSpeed:'800',
        loopBottom: true,
        resize: false,
        css3: true,
        slidesNavigation:true,
        navigationTooltips: ['首页', '惩罚圈', '活动圈', '社交圈', '众筹圈', '夺宝圈', '分享圈']
    });
    var time = setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 3000);
    $('.search-bar').on({
        "focus":function(){
            clearInterval(time)
        },
        "blur":function(){
            setInterval(function(){
                $.fn.fullpage.moveSlideRight();
            }, 3000);
        }
    },"input");
});

