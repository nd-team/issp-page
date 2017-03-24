/**
 * Created by ike on 2017/3/23.
 */
//申诉
function myName(className1,className2){
    var index=1;
    var count3 = $(".s2").find("span img").length;
    $(className1).click(function () {
        index -= 1;
        if (index == 0) {
            index = count3 ;
            $(".fig-fir").text(index);
            $(this).parents(".all-picture").find(".figure").children(".fig-fir").text(index);
        }else{
            $(".fig-fir").text(index);

        }
    });
    $(className2).click(function () {
        index +=1;
        if (index<=count3) {
            $(".fig-fir").text(index);
        }else{
            index=1;
            $(".fig-fir").text(index);
        }
    });
    $(".fig-last").text(count3);
}
$(function () {
    $('[data-title]').click(function(){
        var dataTitle = $(this).attr("data-title");
        $('#modalbg').show();
        $('#modal').show();
        $('#modal .'+dataTitle).show();
    });
    $('.close').click(function(){
        $(this).parents('.m-con').hide();
        $('#modal').hide();
        $('#modalbg').hide();
    });
    $(".all-picture").hide();
    $(".per-detail-pic").click(function () {
        $(this).parents(".person-cont").find(".all-picture").toggle();
    });
    $(".reply-del").click(function () {
        $(this).parents("li").remove();
    });
    $(".so-and-so").hide();
    $(".reply_name4").click(function () {
        $(".so-and-so").show()
    });
    var x;
    for (j=1;j<=$(".m-con.length");j++){
        x=j;
    }
    var defaults = {
        speed: 500
        ,timer: 4000
        ,autoSlider: false
        ,hasNav: true
        ,zIndex:20
        ,ease: 'linear'
    }
        ,as = $('#papers1').paperSlider(defaults)
        ,count=2;
    $('#o-btn-des').click(function() {
        as.destroy()
    });
    var x = $(".init-body").length;
    for ( count = 2; count < x; count++) {
        $('#papers' + count).paperSlider(defaults);
    }
    myName(".ps-nav-prev",".ps-nav-next");
});
