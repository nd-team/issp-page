$(document).ready(function(){
    $('.nav').on("click","figure a",function(){
        var style = $(this).attr('data-title');
        $("link.theme[title='"+style+"']").removeAttr("disabled");
        $("link.theme[title!='"+style+"']").attr("disabled","disabled");
    });
    //布局
    function piclay(){
        $('.imglay').on("click","figure a",function(){
            var lay = $(this).attr("data-title");
            $(this).addClass('active').parent().siblings().children('a').removeClass('active');
            $('.imgspoke').children("."+lay).show().siblings('.imglay-wrap').hide()
        })
    }

    //市区联动
    function select(){
        var countys = null;
        var citydata ;
        $.get("/data/guangdong.json",function(data){
            $.each(data,function(ind,item){
                var option = "<option value='" + item.zip + "'>" + item.name + "</option>";
                $("#city").append(option);
                var first = $("#city").val();
                if(item.zip ==first ){
                    countys = item.county;
                    $.each(countys,function(i,t){
                        var option = "<option value='" + t.zip + "'>" + t.name + "</option>";
                        $("#county").append(option);
                    })
                }
            });
            $('#city').change(function(e){
                var zip = $(this).val();
                var countys;
                $("#county option").remove();
                $.each(data,function(i,t){
                    if(t.zip ==zip ){
                         countys = t.county;
                         $.each(countys,function(i,t){
                            var option = "<option value='" + t.zip + "'>" + t.name + "</option>";
                            $("#county").append(option);
                        })
                    }
                });

            })
        });

    }

    //活动内容
    function actConTable(){
        $('.activity-con').on("click",".icon-add",function(){
            var tagName = $( this ).parent().prop("tagName");
            var actConHtml;
            if(tagName=="DT"){
                console.info("dt");
                actConHtml = "<dl>" +
                    "<dt>" +
                        "<input type='text'>" +
                        "<a href='javascript:void(0)' class='icon-add'>" +
                            "<svg role='img'>" +
                                "<use xlink:href='#act_close'></use>" +
                            "</svg>" +
                        "</a>" +
                    "</dt>" +
                    "<dd>" +
                        "<p>" +
                            "<input type='text'>" +
                            "<input type='text'>" +
                        "</p>" +
                        "<a href='javascript:void(0)' class='icon-add'>" +
                            "<svg role='img'>" +
                                "<use xlink:href='#act_close'></use>" +
                            "</svg>" +
                        "</a>" +
                    "</dd></dl>";
                $('.activity-con .item-con').append(actConHtml)

            }else if(tagName=="DD"){
                actConHtml= "<input type='text'>";
                $(this).siblings('p').append(actConHtml)
            }
        });
    }
    function actPic(){
        $('.piclist').on("click",".del",function(){
            $(this).parents('li').remove();
        });

        //图片拖曳
        var dragged;
        $('.piclist').on({
            "dragstart":function(){
                dragged = $(this).clone();
            },
            "dragend":function(){
                $('.imgspoke').find("span.cur").html(dragged)
            }
        },"img");

        $('.imgspoke').on({
            "dragenter":function(event){
                $(this).parents('.imgspoke').find("span").removeClass('cur');
                $(this).addClass('cur');
                event.preventDefault();
            },
            "dragover":function(event){
                event.preventDefault();
            },
            "dragleave":function(event){
                $(this).removeClass('cur')
            },
        },"span")

    }
    actConTable();
    actPic();
    piclay()
    select()
});