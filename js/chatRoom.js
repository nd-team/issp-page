$(document).ready(function () {
    (function($){
        $.fn.myTab = function(options){//将对象作为参数传进去
            var defult = {parent:"",index:null},
                setting =$.extend(defult,options);//extend方法合并两个对象，如果两个对象有相同属性，则后面的那个对象的属性覆盖前面那个对象的属性。
            $(this).find("li").on("click",function(){
                var $this=$(this),
                    $index =$this.index();
                $this.addClass("current").siblings().removeClass("current");
                $(setting.parent).children("ul").eq($index).show().siblings().hide();//切换标签对应的内容

            })
            //判断进入页面显示那个标签样式和内容
            if(setting.index==null){
                $(this).find('li').eq(0).click();
            }else{
                $(this).find('li').eq(options.index).click();
            }
        }
    })(jQuery)

    $(".info-tab").myTab({parent:".tab-content",index:0});

    $('.avatar').on('click', '.editor', function(){
        $(".modify-modal").show();
    });
    $(".close").on('click', function(){
          $(".modify-modal").hide();
    });

    // 我的好友信息弹窗
    $('.picture').on('click', function(){
        if(!$(this).hasClass('same-big')){
            $(this).addClass('same-big');
        }else {
            $(this).removeClass('same-big');
        }
    });

    // 关注
    var onOff = true;
    var Attention = $('.attention');
    Attention.on('click', function(){

        if(Attention.onOff) {
            $(this).text('关注');
            Attention.onOff = false;
        }else{
            $(this).text('取消关注');
            Attention.onOff = true;
        }

    });

    // 文章点赞效果
    var num = true;
    var zan = $('.heart');
    zan.on('click', function(){
        var n = 1
        var zan_num = parseInt($('#zan-num').text(''+ n));
        if(zan.num){
            zan_num++;
            $(this).css('fill','#cdcdcd');
            zan.num = false;
        }else{
            $(this).css('fill','#f3403b');
            zan.num = true;
            zan_num--;
        }
    });
    /*鼠标经过效果*/
    $('.photo').on('mouseover','img', function(){
        $(this).find('.modal-message').show();
    });
    $('.photo').on('mouseout','img', function(){
        $(this).find('.modal-message').hide();
    });

    // 模态框头像截取
    $(window).load(function () {
        var options = {
            thumbBox: '.thumbBox',
            spinner: '.spinner',
            imgSrc: 'images/avatar.jpg'
        }
        var cropper = $('.imageBox').cropbox(options);
        $('#upload-file').on('change', function () {
            var reader = new FileReader();
            reader.onload = function (e) {
                options.imgSrc = e.target.result;
                cropper = $('.imageBox').cropbox(options);
            }
            reader.readAsDataURL(this.files[0]);
            this.files = [];
        })
        $('#btnCrop').on('click', function () {
            var img = cropper.getDataURL();
            $('.cropped').html('');
            $('.cropped').append('<p style="color:#333;margin-top:20px;font-size:18px;">头像预览</p>');
            $('.cropped').append('<img src="' + img + '" align="absmiddle" style="width:100px;margin-top:20px;border-radius:100px;"><p style="margin-top:20px;">100*100像素</p>');
            $('.cropped').append('<img src="' + img + '" align="absmiddle" style="width:50px;margin-top:20px;border-radius:50px;" ><p style="margin-top:20px;">50*50像素</p>');

        })
        $('#btnSubmit').on('click', function () {
            $('#circularG').show();
            var img = cropper.getDataURL().replace('data:images/jpg;base64,', '');
            var url = 'AvatarHandler.ashx';
            var data = {
                action: "add",
                picStr: img
            };
            $.ajax(url, {
                type: 'post',
                data: data,
                success: function (data) {
                    $('#circularG').hide();
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {

                }
            });
        })
        $('#btnGetAvatar').on('click', function () {
            var url = 'AvatarHandler.ashx';
            var data = {
                action: "get"
            };
            $.ajax(url, {
                type: 'post',
                data: data,
                success: function (data) {
                    $("#avatarimg").append('<img src="data:image/png;base64,' + data + '" align="absmiddle" style="width:50px;margin-top:4px;border-radius:50px;><p>50px*50px</p>');
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {

                }
            });
        })
    });
});
