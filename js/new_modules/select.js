/**
 * Created by ike on 2017/3/24.
 */
    $(function(){
    $('.select_b1').hide();
    function select_box(boxSe,selectB1) {
    $(document).click(function () {
    $(selectB1).hide();
});
    $(boxSe).on('click',function(e){
    $(this).parents("li").siblings().find(selectB1).hide();
    $(this).parent().find(selectB1).show();
    e?e.stopPropagation():event.cancelBubble = true;
    $(selectB1).find("a").click(function(e){
    var selectText=$(this).text();
    $(this).parents(selectB1).hide();
    $(this).parents("li").find(boxSe).val(selectText);
    e?e.stopPropagation():event.cancelBubble = true;
});
});
    return false;
}
    select_box(".box_se",".select_b1");
});
