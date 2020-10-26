$(document).ready(function() {
    $('.bars').click(function() {
        $('.list-wrap, .overlay').addClass('active');
    });
    $('.close-mobile, .overlay').click(function() {
        $('.list-wrap, .overlay').removeClass('active');
    });

    if($(window).width() < 992) {
        $('.submenu-child').slideUp();
        $('.has-child i').click(function() {
            $('.submenu-child').toggle();
        });
    }
}); 