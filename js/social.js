$(document).ready(function(){
    $('.vote').on("click",".vote-tab-btn a",function(){
        var dataTitle = $(this).attr('data-title');
        $(this).addClass('active').siblings().removeClass('active');
        $('.'+dataTitle).show().siblings('.vote-pages').hide();
    });

    $('.vote').on("click",".add",function(){
        var act = $('.vote .active').attr('data-title');
        console.info(act);
        if(act=="texts"){
            var textInd=$('.vote .texts').children('.text-page').length+1;
            var textsHtml = '<div class="text-page"><textarea placeholder="'+textInd+'."></textarea></div>';
            $('.texts').append(textsHtml);
        }else if(act=="imgs"){
            var imgInd=$('.vote .imgs').children('.img-page').length+1;
            var imgsHtml = '<div class="img-page">'
            +    '<input type="file" id="select-img'+imgInd+'">'
            +    '<label for="select-img'+imgInd+'">'
            +        '<svg role="img" class="photo">'
            +            '<use xlink:href="#photo"></use> '
            +        '</svg>'
            +    '</label>'
            +    '<textarea placeholder="'+imgInd+'."></textarea>'
            +'</div>';
            console.info(imgInd);
            $('.imgs').append(imgsHtml)
        }
    });
    $('.rele-article').on("click",".mores",function(){
            $('.vote').show();
    });
    $('.vote').on("click",".close",function(){
        $('.vote').hide()
    });
    //评论
    $('.comment-menu').on("click",".talkbtn",function(){

        $(this).parents('.comment-menu').next().find('.reply').slideToggle();
    });
    $('.menubtn').on("click",".replybtn",function(){

        // var replyInd = $(this).parent().parent().parent().css('order');
        // $(this).parents('.comment-detail').children('.subreply').slideToggle();
        // console.info(replyInd);

    });
    //点赞
    $('.likebtn').on("click",function(){
        var count = $(this).children('span').text();
        if($(this).hasClass('red')){
            $(this).children('.like').css("fill","#9b9b9b");
            $(this).removeClass('red');
            $(this).children('span').text(--count);
        }else {
            $(this).children('.like').css("fill","#ef4848");
            $(this).addClass('red');
            $(this).children('span').text(++count);
        }
    });
    //转发
    $('.zhuanfa').on("click",function(){
        $('#modalbg,#modal').show();
        $('body').css('overflow','hidden')
    });
    $('#modal .m-close').on("click",function(){
        $('#modalbg,#modal').hide();
        $('body').css('overflow','auto')
    });
//分页
    function laypages(){
        laypage({
            cont: 'replypages', //容器。值支持id名、原生dom对象，jquery对象,
            pages: 10, //总页数
            skin: 'molv', //皮肤
            first: 1, //将首页显示为数字1,。若不显示，设置false即可
            last: 10, //将尾页显示为总页数。若不显示，设置false即可
            prev: '<', //若不显示，设置false即可
            next: '>' //若不显示，设置false即可
        });
        laypage({
            cont: 'pages', //容器。值支持id名、原生dom对象，jquery对象,
            pages: 10, //总页数
            skin: 'molv', //皮肤
            first: 1, //将首页显示为数字1,。若不显示，设置false即可
            last: 10, //将尾页显示为总页数。若不显示，设置false即可
            prev: '<', //若不显示，设置false即可
            next: '>' //若不显示，设置false即可
        });
    }
    laypages()
})