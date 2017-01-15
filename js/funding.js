/**
 * Created by ike on 2017/1/15.
 */
$(function() {
    var bannerwidth = $(".banner_center").width();
    var len = $(".banner_center .banner_img li").length;
    var index = 0;
    var autoplay;
    $(".banner_center .circle ul li").css("opacity", 0.4).click(function () {
        index = $(".banner_center .circle ul li").index(this);
        showPics(index);
    }).eq(0).trigger("click");
    $(".prev").click(function () {
        index -= 1;
        if (index == -1) {
            index = len - 1;
        }
        showPics(index);
    });

    $(".next").click(function () {
        index += 1;
        if (index == len) {
            index = 0;
        }
        showPics(index);
    });

    $(".banner_center").hover(function () {
        clearInterval(autoplay);
    }, function () {
        picTimer = setInterval(function () {
            showPics(index);
            index++;
            if (index == len) {
                index = 0;
            }
        }, 2000);
    }).trigger("click");

    function showPics(index) {
        var nowLeft = -index * bannerwidth;
        $(".banner_center .banner_img").stop(true, false).animate({"left": nowLeft}, 300);
        $(".banner_center .circle ul li").stop(true, false).animate({"opacity": "0.4"}, 300).eq(index).stop(true, false).animate({"opacity": "1"}, 300);
    };
});