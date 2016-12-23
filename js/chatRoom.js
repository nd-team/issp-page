$(document).ready(function () {

    $('.photo').on('mouseover','img', function(){
        $(this).find('.modal-message').show();
    });
    $('.photo').on('mouseout','img', function(){
        $(this).find('.modal-message').hide();
    });
})
